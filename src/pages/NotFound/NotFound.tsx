import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import styles from './NotFound.module.css';

function NotFound() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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

  return (
    <div 
      className={styles.notFoundContainer}
      style={{ 
        minHeight: `${windowHeight}px`
      }}
    >
      {/* Background Gradient Orbs */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
      </div>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        {/* Error Icon */}
        <div className={styles.errorIcon}>
          <FaExclamationTriangle />
        </div>

        {/* Error Code */}
        <h1 className={styles.errorCode}>404</h1>

        {/* Main Message */}
        <h2 className={styles.title}>Página No Encontrada</h2>

        {/* Description */}
        <p className={styles.message}>
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <p className={styles.subMessage}>
          Estamos trabajando constantemente para mejorar nuestro sitio web. 
          Mientras tanto, puedes regresar al inicio o contactarnos directamente.
        </p>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <Link to="/" className={styles.homeButton}>
            <FaHome className={styles.buttonIcon} />
            <span>Volver al Inicio</span>
          </Link>

          <Link to="/contacto" className={styles.contactButton}>
            <span>Contáctanos</span>
          </Link>
        </div>

        {/* Quick Contact Info */}
        <div className={styles.quickContact}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Teléfono:</span>
            <a href="tel:4621434718" className={styles.contactLink}>
              (462) 143-47-18
            </a>
          </div>
          <div className={styles.contactDivider}>•</div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Servicio:</span>
            <span className={styles.contactValue}>24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;