import { useEffect, useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaTruck,
  FaShieldAlt,
  FaMedal,
  FaHeadset
} from 'react-icons/fa';
import styles from './Contacto.module.css';

function Contacto() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    urgencia: '',
    mensaje: ''
  });

  // Actualizar altura de ventana dinámicamente
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        setWindowHeight(window.innerHeight);
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    
    // Simular envío exitoso
    alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      tipoServicio: '',
      urgencia: '',
      mensaje: ''
    });
  };

  return (
    <div 
      className={styles.contactoContainer}
      style={{ minHeight: `${windowHeight}px` }}
    >
      {/* Background Gradient Orbs */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
        <div className={styles.gradientOrb4} />
      </div>

      {/* Contenido Principal */}
      <div className={styles.mainContent}>
        {/* Header de la Página */}
        <header className={styles.pageHeader}>
          <div className={styles.headerIcon}>
            <FaHeadset />
          </div>
          <h1 className={styles.pageTitle}>Contáctanos</h1>
          <p className={styles.pageSubtitle}>
            Estamos disponibles 24/7 los 365 días del año para atender sus necesidades 
            industriales. Su proyecto es nuestra prioridad.
          </p>
          <div className={styles.urgencyBadge}>
            <FaExclamationTriangle className={styles.urgencyIcon} />
            <span>Servicio de Emergencia Disponible</span>
          </div>
        </header>

        {/* Grid Principal de Contacto */}
        <div className={styles.contactGrid}>
          {/* Información de Contacto */}
          <div className={styles.contactInfo}>
            <h2 className={styles.contactInfoTitle}>
              <FaPhone className={styles.contactInfoIcon} />
              Información de Contacto
            </h2>
            
            <div className={styles.contactItems}>
              {/* Teléfonos */}
              <div className={styles.contactItem}>
                <FaPhone className={`${styles.contactItemIcon} ${styles.phoneIcon}`} />
                <div className={styles.contactItemContent}>
                  <h3>Teléfonos</h3>
                  <p>
                    Oficina: <a href="tel:4621434718" className={styles.contactLink}>(462) 143-47-18</a>
                  </p>
                  <p>
                    Celular: <a href="tel:4621393586" className={styles.contactLink}>(462) 139-35-86</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactItem}>
                <FaEnvelope className={`${styles.contactItemIcon} ${styles.emailIcon}`} />
                <div className={styles.contactItemContent}>
                  <h3>Correo Electrónico</h3>
                  <p>
                    <a href="mailto:ezequiel_ho@hotmail.com" className={styles.contactLink}>
                      ezequiel_ho@hotmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Ubicación */}
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={`${styles.contactItemIcon} ${styles.locationIcon}`} />
                <div className={styles.contactItemContent}>
                  <h3>Ubicación</h3>
                  <p>Calle Rey Alfonso XIII #191</p>
                  <p>Col. Los Reyes C.P. 36570</p>
                  <p>Irapuato, Guanajuato, México</p>
                </div>
              </div>

              {/* Horarios */}
              <div className={styles.contactItem}>
                <FaClock className={`${styles.contactItemIcon} ${styles.timeIcon}`} />
                <div className={styles.contactItemContent}>
                  <h3>Disponibilidad</h3>
                  <p><strong>24 horas del día</strong></p>
                  <p><strong>365 días del año</strong></p>
                  <p>Incluyendo fines de semana y días festivos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className={styles.contactForm}>
            <h2 className={styles.formTitle}>
              <FaPaperPlane className={styles.formIcon} />
              Solicitar Cotización
            </h2>
            
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
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <FaPaperPlane className={styles.submitIcon} />
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>

        {/* Sección de Emergencia */}
        <section className={styles.emergencySection}>
          <h2 className={styles.emergencyTitle}>
            <FaExclamationTriangle className={styles.emergencyIcon} />
            ¿Emergencia Industrial?
          </h2>
          <p className={styles.emergencyDescription}>
            ¿Su maquinaria se averió y necesita una reparación inmediata? 
            Estamos disponibles 24/7 para atender emergencias industriales. 
            ¡No deje que una falla detenga su producción!
          </p>
          <div className={styles.emergencyButtons}>
            <a href="tel:4621434718" className={styles.emergencyButton}>
              <FaPhoneAlt className={styles.emergencyButtonIcon} />
              Llamar Ahora
            </a>
            <a href="https://wa.me/524621393586" className={styles.emergencyButton} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className={styles.emergencyButtonIcon} />
              WhatsApp
            </a>
          </div>
        </section>

        {/* Información Adicional */}
        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <FaTruck className={`${styles.infoCardIcon} ${styles.transportIcon}`} />
            <h3 className={styles.infoCardTitle}>Transporte Incluido</h3>
            <p className={styles.infoCardDescription}>
              Contamos con servicio de transporte especializado para recoger y entregar 
              piezas grandes de maquinaria industrial directamente en su empresa.
            </p>
          </div>

          <div className={styles.infoCard}>
            <FaShieldAlt className={`${styles.infoCardIcon} ${styles.warrantyIcon}`} />
            <h3 className={styles.infoCardTitle}>Garantía de Calidad</h3>
            <p className={styles.infoCardDescription}>
              Todos nuestros trabajos están respaldados por nuestra garantía de calidad. 
              26 años de experiencia nos avalan en cada proyecto que realizamos.
            </p>
          </div>

          <div className={styles.infoCard}>
            <FaMedal className={`${styles.infoCardIcon} ${styles.experienceIcon}`} />
            <h3 className={styles.infoCardTitle}>Experiencia Comprobada</h3>
            <p className={styles.infoCardDescription}>
              Desde 1998 hemos trabajado con cientos de empresas en el Bajío mexicano, 
              siendo reconocidos por nuestra puntualidad, calidad y profesionalismo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;