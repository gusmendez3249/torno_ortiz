import { useEffect, useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaWhatsapp,
  FaTruck,
  FaShieldAlt,
  FaMedal,
  FaHeadset
} from 'react-icons/fa';
import CotizationForm from '../../components/Cotizar/CotizationForm';
import styles from './Contacto.module.css';
import UbicacionEmbed from "../../components/Ubicacion/Ubicacion";

function Contacto() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [mostrarMapa, setMostrarMapa] = useState(false);

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

  // Función personalizada para manejar el envío del formulario
  const handleCotizationSubmit = (formData: any) => {
    console.log('Datos recibidos en Contacto:', formData);
     
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

              <div className={styles.contactItem} onClick={() => setMostrarMapa(true)} style={{ cursor: "pointer" }}>
                <FaMapMarkerAlt className={`${styles.contactItemIcon} ${styles.locationIcon}`} />
                <div className={styles.contactItemContent}>
                  <h3>Ubicación</h3>
                  <p>Calle Rey Alfonso XIII #191</p>
                  <p>Col. Los Reyes C.P. 36570</p>
                  <p>Irapuato, Guanajuato, México</p>
                </div>
              </div>

              {mostrarMapa && (
              // o con estilos:
              <UbicacionEmbed onClose={() => setMostrarMapa(false)} className="mb-8" />

              )}

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

          {/* Formulario de Cotización Reutilizable */}
          <CotizationForm 
            onSubmit={handleCotizationSubmit}
            title="Solicitar Cotización"
            showTitle={true}
          />
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