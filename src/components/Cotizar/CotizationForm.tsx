import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Si se proporciona una función onSubmit personalizada, usarla
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Lógica por defecto
        console.log('Datos del formulario:', formData);
        
        // Simular envío exitoso
        alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
      }

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
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.cotizationForm} ${className}`}>
      {showTitle && (
        <h2 className={styles.formTitle}>
          <FaPaperPlane className={styles.formIcon} />
          {title}
        </h2>
      )}
      
      <form onSubmit={handleSubmit}>
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
            className={styles.formInput}
            placeholder="Su nombre completo"
            required
            disabled={isSubmitting}
          />
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
            placeholder="Nombre de su empresa"
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
            className={styles.formInput}
            placeholder="correo@ejemplo.com"
            required
            disabled={isSubmitting}
          />
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
            className={styles.formInput}
            placeholder="(462) 123-45-67"
            required
            disabled={isSubmitting}
          />
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
            className={styles.formSelect}
            required
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
            className={styles.formTextarea}
            placeholder="Describa detalladamente su proyecto, especificaciones técnicas, materiales, tolerancias, cantidades, etc."
            required
            disabled={isSubmitting}
          ></textarea>
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
  );
}

export default CotizationForm;