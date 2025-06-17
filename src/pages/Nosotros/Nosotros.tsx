import { useEffect, useState } from 'react';
import { 
  FaIndustry, 
  FaCog, 
  FaCalendarAlt,
  FaAward,
  FaUsers,
  FaMedal,
  FaHandshake,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaRocket,
  FaHeart,
  FaCheckCircle,
  FaStar,
  FaGem,
  FaUser
} from 'react-icons/fa';
import styles from './Nosotros.module.css';

function Nosotros() {
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
      className={styles.nosotrosContainer}
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
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.companyLogo}>
              <FaIndustry />
            </div>
            
            <h1 className={styles.heroTitle}>
              Torno y Fresadora Servicio Industrial "ORTIZ"
            </h1>
            
            <p className={styles.heroSubtitle}>
              Forjando el futuro de la industria con 26 años de excelencia
            </p>
            
            <p className={styles.heroDescription}>
              Somos una empresa familiar dedicada a la metal mecánica y mantenimiento 
              industrial, comprometidos con la calidad, innovación y servicio excepcional. 
              Desde 1998, hemos sido el socio confiable de la industria en Irapuato, Guanajuato.
            </p>

            {/* Estadísticas Impactantes */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>26</span>
                <span className={styles.statLabel}>Años de Experiencia</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Servicio Disponible</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>365</span>
                <span className={styles.statLabel}>Días del Año</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Tipos de Materiales</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Historia */}
        <section className={styles.historySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
            <p className={styles.sectionSubtitle}>
              Un legado de dedicación, innovación y crecimiento constante en el sector industrial
            </p>
          </div>

          <div className={styles.timelineContainer}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <FaRocket />
              </div>
              <div className={styles.timelineContent}>
                <h3>Los Inicios (1998)</h3>
                <p>
                  Ezequiel Helguera Ortiz fundó la empresa con una visión clara: 
                  ofrecer servicios de metal mecánica de la más alta calidad. 
                  Comenzamos con equipos básicos pero con una gran pasión por la excelencia.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <FaTools />
              </div>
              <div className={styles.timelineContent}>
                <h3>Expansión y Modernización (2005-2010)</h3>
                <p>
                  Incorporamos tecnología CNC y amplimos nuestra capacidad con nuevos 
                  equipos especializados. Esta inversión nos permitió atender proyectos 
                  más complejos y exigentes, consolidando nuestra reputación en el mercado.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <FaAward />
              </div>
              <div className={styles.timelineContent}>
                <h3>Reconocimiento y Crecimiento (2010-2020)</h3>
                <p>
                  Nos convertimos en referente del sector en la región del Bajío. 
                  Implementamos el servicio 24/7 y agregamos capacidades de soldadura 
                  especializada con equipos de argón y alta frecuencia para aluminio.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <FaStar />
              </div>
              <div className={styles.timelineContent}>
                <h3>Liderazgo y Innovación (2020-Presente)</h3>
                <p>
                  Hoy somos líderes en servicios industriales integrales, con un parque 
                  de maquinaria moderna que incluye tornos y fresadoras CNC, equipos de 
                  rectificado de precisión y capacidades para trabajar con más de 15 
                  tipos diferentes de materiales especializados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Valores */}
        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
            <p className={styles.sectionSubtitle}>
              Los principios que guían cada proyecto y definen nuestra excelencia
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <FaShieldAlt className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Calidad Garantizada</h3>
              <p className={styles.valueDescription}>
                Cada pieza que fabricamos cumple con los más altos estándares de 
                calidad. Nuestros 26 años de experiencia respaldan cada trabajo realizado.
              </p>
            </div>

            <div className={styles.valueCard}>
              <FaClock className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Disponibilidad Total</h3>
              <p className={styles.valueDescription}>
                Servicio 24/7 los 365 días del año. Entendemos que la industria 
                no se detiene y estamos aquí cuando nos necesite.
              </p>
            </div>

            <div className={styles.valueCard}>
              <FaRocket className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Innovación Constante</h3>
              <p className={styles.valueDescription}>
                Invertimos continuamente en tecnología de vanguardia, desde equipos 
                CNC hasta técnicas especializadas de soldadura.
              </p>
            </div>

            <div className={styles.valueCard}>
              <FaHandshake className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Compromiso Total</h3>
              <p className={styles.valueDescription}>
                Cada proyecto es único y merece nuestra máxima atención. Trabajamos 
                hasta superar sus expectativas.
              </p>
            </div>

            <div className={styles.valueCard}>
              <FaGem className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Precisión Extrema</h3>
              <p className={styles.valueDescription}>
                Con equipos de rectificado cilíndrico y de superficies planas, 
                garantizamos tolerancias estrictas en cada pieza.
              </p>
            </div>

            <div className={styles.valueCard}>
              <FaHeart className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Pasión Industrial</h3>
              <p className={styles.valueDescription}>
                La metal mecánica no es solo nuestro trabajo, es nuestra pasión. 
                Cada desafío técnico es una oportunidad de demostrar nuestra maestría.
              </p>
            </div>
          </div>
        </section>

        {/* Sección del Fundador */}
        <section className={styles.teamSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestro Fundador</h2>
            <p className={styles.sectionSubtitle}>
              El visionario detrás de más de dos décadas de excelencia industrial
            </p>
          </div>

          <div className={styles.founderCard}>
            <div className={styles.founderAvatar}>
              <FaUser />
            </div>
            <h3 className={styles.founderName}>Ezequiel Helguera Ortiz</h3>
            <p className={styles.founderTitle}>Fundador y Director General</p>
            <p className={styles.founderDescription}>
              Con más de 26 años de experiencia en el sector de metal mecánica, 
              Ezequiel ha construido una empresa que combina la tradición artesanal 
              con la tecnología más avanzada. Su visión de servicio integral y 
              disponibilidad total ha posicionado a la empresa como líder en la región. 
              Su compromiso con la calidad y la innovación continúa siendo el motor 
              que impulsa cada proyecto que emprendemos.
            </p>
          </div>
        </section>

        {/* Sección de Compromiso */}
        <section className={styles.commitmentSection}>
          <div className={styles.commitmentContent}>
            <h2 className={styles.commitmentTitle}>
              Nuestro Compromiso con Usted
            </h2>
            <p className={styles.commitmentDescription}>
              No somos solo proveedores, somos sus socios estratégicos en el éxito. 
              Cada proyecto que emprendemos juntos fortalece la industria mexicana.
            </p>

            <div className={styles.commitmentFeatures}>
              <div className={styles.commitmentFeature}>
                <FaCheckCircle className={styles.commitmentIcon} />
                <h3 className={styles.commitmentFeatureTitle}>Servicio Integral</h3>
                <p className={styles.commitmentFeatureText}>
                  Desde el diseño hasta la entrega, manejamos todo el proceso 
                  con la máxima profesionalidad.
                </p>
              </div>

              <div className={styles.commitmentFeature}>
                <FaMedal className={styles.commitmentIcon} />
                <h3 className={styles.commitmentFeatureTitle}>Excelencia Comprobada</h3>
                <p className={styles.commitmentFeatureText}>
                  26 años de trayectoria exitosa respaldan cada trabajo que 
                  realizamos para usted.
                </p>
              </div>

              <div className={styles.commitmentFeature}>
                <FaUsers className={styles.commitmentIcon} />
                <h3 className={styles.commitmentFeatureTitle}>Equipo Especializado</h3>
                <p className={styles.commitmentFeatureText}>
                  Nuestro personal cuenta con la experiencia y conocimiento 
                  para resolver cualquier desafío técnico.
                </p>
              </div>

              <div className={styles.commitmentFeature}>
                <FaCog className={styles.commitmentIcon} />
                <h3 className={styles.commitmentFeatureTitle}>Tecnología Avanzada</h3>
                <p className={styles.commitmentFeatureText}>
                  Equipos CNC, rectificadoras de precisión y soldadura 
                  especializada al servicio de sus proyectos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Nosotros;