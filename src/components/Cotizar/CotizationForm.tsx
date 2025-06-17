import { useState } from 'react';
import { FaPaperPlane, FaExclamationCircle, FaCheckCircle, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from './CotizationForm.module.css';

interface CotizationFormProps {
  title?: string;
  showTitle?: boolean;
  onSubmit?: (formData: FormData) => void;
  className?: string;
}

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  tipoServicio: string;
  urgencia: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  tipoServicio?: string;
  mensaje?: string;
}

interface AlertState {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

function CotizationForm({
  title = "Solicitar Cotización",
  showTitle = true,
  onSubmit,
  className = ""
}: CotizationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    urgencia: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    type: 'success',
    message: ''
  });

  // Configuración de EmailJS (reemplaza con tus credenciales)
  const EMAILJS_CONFIG = {
    serviceId: 'service_o2oercf', // Reemplaza con tu Service ID
    templateId: 'template_bzh8iae', // Reemplaza con tu Template ID
    userId: '3Ni09l-UA4BpRgCEH' // Reemplaza con tu User ID
  };

  const showAlert = (type: 'success' | 'error', message: string) => {
    setAlert({ show: true, type, message });
    // La alerta se ocultará automáticamente después de 5 segundos
    setTimeout(() => {
      setAlert({ show: false, type: 'success', message: '' }); // Reset message and type
    }, 5000);
  };

  const closeAlert = () => {
    setAlert({ show: false, type: 'success', message: '' }); // Reset message and type
  };

  // Validaciones
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
    }

    // Validar teléfono
    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!phoneRegex.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Ingrese un teléfono válido (mínimo 10 dígitos)';
    }

    // Validar tipo de servicio
    if (!formData.tipoServicio) {
      newErrors.tipoServicio = 'Seleccione un tipo de servicio';
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'La descripción del proyecto es requerida';
    } else if (formData.mensaje.trim().length < 20) {
      newErrors.mensaje = 'La descripción debe tener al menos 20 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const formatEmailTemplate = (data: FormData) => {
    const fechaActual = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const urgenciaText = {
      'baja': 'Baja - Puede esperar',
      'media': 'Media - Esta semana',
      'alta': 'Alta - Urgente',
      'emergencia': '🚨 EMERGENCIA - Inmediato 🚨'
    };

    const servicioText = {
      'torno': 'Trabajo de Torno',
      'fresado': 'Trabajo de Fresado',
      'soldadura': 'Soldadura Especializada',
      'rectificado': 'Rectificado de Precisión',
      'fabricacion': 'Fabricación de Piezas',
      'mantenimiento': 'Mantenimiento Industrial',
      'emergencia': 'Servicio de Emergencia',
      'otro': 'Otro'
    };

    return {
      to_email: 'gustavoangelc2005@gmail.com',
      from_name: data.nombre,
      from_email: data.email,
      subject: `Nueva Cotización - ${data.nombre} - ${servicioText[data.tipoServicio as keyof typeof servicioText]}`,
      message: `
NUEVA COTIZACIÓN - TORNO Y FRESADORA ORTIZ
═══════════════════════════════════════════

📅 Fecha de solicitud: ${fechaActual}

👤 INFORMACIÓN DEL CLIENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━
• Nombre: ${data.nombre}
• Empresa: ${data.empresa || 'No especificada'}
• Email: ${data.email}
• Teléfono: ${data.telefono}

🔧 DETALLES DEL SERVICIO
━━━━━━━━━━━━━━━━━━━━━━━━━━
• Tipo de servicio: ${servicioText[data.tipoServicio as keyof typeof servicioText] || data.tipoServicio}
• Nivel de urgencia: ${urgenciaText[data.urgencia as keyof typeof urgenciaText] || 'No especificada'}

📝 DESCRIPCIÓN DEL PROYECTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.mensaje}

═══════════════════════════════════════════
Este email fue generado automáticamente desde el sitio web.
Para responder al cliente, use: ${data.email}
Teléfono del cliente: ${data.telefono}
═══════════════════════════════════════════
      `.trim(),
      // Campos individuales para el template
      cliente_nombre: data.nombre,
      cliente_empresa: data.empresa,
      cliente_email: data.email,
      cliente_telefono: data.telefono,
      servicio_tipo: servicioText[data.tipoServicio as keyof typeof servicioText],
      servicio_urgencia: urgenciaText[data.urgencia as keyof typeof urgenciaText] || 'No especificada',
      proyecto_descripcion: data.mensaje,
      fecha_solicitud: fechaActual
    };
  };

  const sendEmail = async (data: FormData): Promise<boolean> => {
    try {
      const templateParams = formatEmailTemplate(data);

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.userId
      );

      return response.status === 200;
    } catch (error) {
      console.error('Error al enviar email:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showAlert('error', '⚠️ Por favor, corrija los errores en el formulario antes de enviar.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar email
      const emailSent = await sendEmail(formData);

      if (emailSent) {
        // Si se proporciona una función onSubmit personalizada, usarla
        if (onSubmit) {
          onSubmit(formData);
        }

        // <<-- IMPORTANTE: AQUÍ ES DONDE LLAMAS A LA FUNCIÓN PARA MOSTRAR LA ALERTA
        // Y NO RENDERIZAS EL JSX DE LA ALERTA DIRECTAMENTE -->>
        showAlert('success', '🎉 ¡Cotización enviada exitosamente! 📧 Nos pondremos en contacto contigo muy pronto para discutir tu proyecto.');

        // Limpiar formulario después del envío exitoso
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          tipoServicio: '',
          urgencia: '',
          mensaje: ''
        });
        setErrors({});
      } else {
        throw new Error('Error al enviar el email');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      showAlert('error', '❌ Ups! Hubo un problema al enviar tu cotización. 📞 Por favor, inténtalo de nuevo o contáctanos directamente al (462) 143-47-18. ¡Estamos aquí para ayudarte!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ALERTA PERSONALIZADA: ESTE BLOQUE VA FUERA DEL FORMULARIO Y SE CONTROLA CON EL ESTADO 'alert.show' */}
      {alert.show && (
        <div className={`${styles.customAlert} ${styles[alert.type]}`}>
          <div className={styles.alertContent}>
            <div className={styles.alertIcon}>
              {alert.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
            </div>
            <div className={styles.alertMessage}>
              {alert.message}
            </div>
            <button className={styles.alertClose} onClick={closeAlert}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* CONTENEDOR PRINCIPAL DEL FORMULARIO */}
      <div className={`${styles.cotizationForm} ${className}`}>
        {showTitle && (
          <h2 className={styles.formTitle}>
            <FaPaperPlane className={styles.formIcon} />
            {title}
          </h2>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* ... Resto de los campos del formulario ... */}
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.formLabel}>
              Nombre Completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className={`${styles.formInput} ${errors.nombre ? styles.inputError : ''}`}
              placeholder="Su nombre completo"
              disabled={isSubmitting}
            />
            {errors.nombre && (
              <div className={styles.errorMessage}>
                <FaExclamationCircle className={styles.errorIcon} />
                {errors.nombre}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="empresa" className={styles.formLabel}>
              Empresa
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Nombre de su empresa (opcional)"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
              placeholder="correo@ejemplo.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <div className={styles.errorMessage}>
                <FaExclamationCircle className={styles.errorIcon} />
                {errors.email}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefono" className={styles.formLabel}>
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              className={`${styles.formInput} ${errors.telefono ? styles.inputError : ''}`}
              placeholder="(462) 123-45-67"
              disabled={isSubmitting}
            />
            {errors.telefono && (
              <div className={styles.errorMessage}>
                <FaExclamationCircle className={styles.errorIcon} />
                {errors.telefono}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="tipoServicio" className={styles.formLabel}>
              Tipo de Servicio *
            </label>
            <select
              id="tipoServicio"
              name="tipoServicio"
              value={formData.tipoServicio}
              onChange={handleInputChange}
              className={`${styles.formSelect} ${errors.tipoServicio ? styles.inputError : ''}`}
              disabled={isSubmitting}
            >
              <option value="">Seleccione un servicio</option>
              <option value="torno">Trabajo de Torno</option>
              <option value="fresado">Trabajo de Fresado</option>
              <option value="soldadura">Soldadura Especializada</option>
              <option value="rectificado">Rectificado de Precisión</option>
              <option value="fabricacion">Fabricación de Piezas</option>
              <option value="mantenimiento">Mantenimiento Industrial</option>
              <option value="emergencia">Servicio de Emergencia</option>
              <option value="otro">Otro</option>
            </select>
            {errors.tipoServicio && (
              <div className={styles.errorMessage}>
                <FaExclamationCircle className={styles.errorIcon} />
                {errors.tipoServicio}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="urgencia" className={styles.formLabel}>
              Nivel de Urgencia
            </label>
            <select
              id="urgencia"
              name="urgencia"
              value={formData.urgencia}
              onChange={handleInputChange}
              className={styles.formSelect}
              disabled={isSubmitting}
            >
              <option value="">Seleccione la urgencia</option>
              <option value="baja">Baja - Puede esperar</option>
              <option value="media">Media - Esta semana</option>
              <option value="alta">Alta - Urgente</option>
              <option value="emergencia">EMERGENCIA - Inmediato</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensaje" className={styles.formLabel}>
              Descripción del Proyecto *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              className={`${styles.formTextarea} ${errors.mensaje ? styles.inputError : ''}`}
              placeholder="Describa detalladamente su proyecto: especificaciones técnicas, materiales, tolerancias, cantidades, plazos de entrega, etc. (mínimo 20 caracteres)"
              disabled={isSubmitting}
            ></textarea>
            {errors.mensaje && (
              <div className={styles.errorMessage}>
                <FaExclamationCircle className={styles.errorIcon} />
                {errors.mensaje}
              </div>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            <FaPaperPlane className={styles.submitIcon} />
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </form>
      </div>
    </>
  );
}

export default CotizationForm;