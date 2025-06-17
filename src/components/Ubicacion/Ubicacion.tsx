import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaDirections, 
  FaPhone, 
  FaClock, 
  FaRoute
} from 'react-icons/fa';
import styles from '../Ubicacion/Ubicacion.module.css';

interface UbicacionEmbedProps {
  className?: string;
  onClose?: () => void;
}

const UbicacionEmbed: React.FC<UbicacionEmbedProps> = ({ className = "", onClose }) => {
  // Información de la empresa
  const empresaInfo = {
    nombre: "Torno y Fresadora Servicio Industrial ORTIZ",
    direccion: "Calle Rey Alfonso XIII #191, Col. Los Reyes",
    ciudad: "Irapuato, Guanajuato, México",
    codigoPostal: "C.P. 36570",
    telefono: "(462) 143-47-18",
    celular: "(462) 139-35-86",
    horario: "24/7 - 365 días del año",
    coordenadas: "20.66310383178921, -101.35610445465763"
  };

  // URL del mapa embed
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1591344551557!2d-101.35610445465763!3d20.66310383178921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7e2e8426e4e1%3A0xdbecd02576239cbf!2sRey%20Alfonso%20XIII%20191%2C%20Los%20Reyes%2C%2036570%20Irapuato%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1750181930714!5m2!1ses-419!2smx";

  // URLs para direcciones
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Rey+Alfonso+XIII+191,+Los+Reyes,+36570+Irapuato,+Gto.,+México&travelmode=driving`;
  const googleMapsUrl = `https://www.google.com/maps/place/Rey+Alfonso+XIII+191,+Los+Reyes,+36570+Irapuato,+Gto.,+M%C3%A9xico`;

  return (
    <div className={`${styles.ubicacionContainer} ${className}`}>
      {/* Botón de Cerrar */}
      {onClose && (
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar ubicación"
        >
            X
        </button>
      )}

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <FaMapMarkerAlt />
        </div>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Nuestra Ubicación</h2>
          <p className={styles.subtitle}>
            Visítanos en nuestras instalaciones o solicita nuestro servicio a domicilio
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className={styles.mainContent}>
        {/* Información de Contacto */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <h3 className={styles.infoTitle}>Dirección</h3>
            </div>
            <div className={styles.infoContent}>
              <p className={styles.direccion}>{empresaInfo.direccion}</p>
              <p className={styles.ciudad}>{empresaInfo.ciudad}</p>
              <p className={styles.codigoPostal}>{empresaInfo.codigoPostal}</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <FaPhone className={styles.infoIcon} />
              <h3 className={styles.infoTitle}>Contacto</h3>
            </div>
            <div className={styles.infoContent}>
              <p className={styles.telefono}>
                <a href={`tel:${empresaInfo.telefono.replace(/\D/g, '')}`}>
                  {empresaInfo.telefono}
                </a>
              </p>
              <p className={styles.celular}>
                <a href={`tel:${empresaInfo.celular.replace(/\D/g, '')}`}>
                  {empresaInfo.celular}
                </a>
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <FaClock className={styles.infoIcon} />
              <h3 className={styles.infoTitle}>Horario</h3>
            </div>
            <div className={styles.infoContent}>
              <p className={styles.horario}>{empresaInfo.horario}</p>
              <p className={styles.servicioEmergencia}>Servicio de emergencia disponible</p>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación de ${empresaInfo.nombre}`}
              className={styles.mapIframe}
            ></iframe>
          </div>

          {/* Botones de Acción */}
          <div className={styles.actionButtons}>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              <FaDirections className={styles.buttonIcon} />
              <span>Obtener Direcciones</span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              <FaRoute className={styles.buttonIcon} />
              <span>Ver en Google Maps</span>
            </a>

            <a
              href={`tel:${empresaInfo.telefono.replace(/\D/g, '')}`}
              className={styles.actionButton}
            >
              <FaPhone className={styles.buttonIcon} />
              <span>Llamar Ahora</span>
            </a>
          </div>
        </div>
      </div>

      {/* Información Adicional */}
      <div className={styles.additionalInfo}>
        <div className={styles.transporteInfo}>
          <div className={styles.transporteIcon}>
            🚛
          </div>
          <div className={styles.transporteContent}>
            <h4>Servicio de Transporte</h4>
            <p>
              Contamos con transporte especializado para recoger y entregar 
              piezas grandes de maquinaria industrial directamente en su ubicación.
            </p>
          </div>
        </div>

        <div className={styles.cobertura}>
          <h4>Área de Cobertura</h4>
          <p>
            Servimos toda la región del Bajío mexicano, incluyendo Irapuato, 
            León, Salamanca, Celaya y ciudades circunvecinas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UbicacionEmbed;