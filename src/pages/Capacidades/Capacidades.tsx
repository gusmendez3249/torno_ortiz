import { useEffect, useState } from 'react';
import { 
  FaCog, 
  FaIndustry, 
  FaTools, 
  FaCheckCircle, 
  FaStar,
  FaWrench,
  FaHammer,
  FaClock,
  FaTruck,
  FaShieldAlt,
  FaFire,
  FaCube,
  FaGem
} from 'react-icons/fa';
import styles from './Capacidades.module.css';

function Capacidades() {
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

  // Equipos de torno
  const equiposTorno = [
    "1 Torno capacidad 20\" de volteo y 65\" entre centros",
    "2 Tornos capacidades 14\" de volteo y 45\" entre centros", 
    "1 Torno CNC"
  ];

  // Equipos de fresado
  const equiposFresado = [
    "1 Fresadora CNC",
    "1 Fresadora #3 12\"x 50\"",
    "2 Fresadoras #2 capacidad 9\" y 49\"",
    "Equipo de accesorios para fresadoras",
    "Cabezal divisor, mesa giratoria",
    "Cabezal para torneado, codo de 90°"
  ];

  // Equipos de soldadura
  const equiposSoldadura = [
    "1 Máquina de soldar con 250 ampers",
    "1 Equipo para soldar con argón inoxidable",
    "1 Equipo para soldar con alta frecuencia aluminio"
  ];

  // Equipos de rectificado y acabado
  const equiposRectificado = [
    "1 Rectificador cilíndrico",
    "1 Rectificadora de superficies planas de 6\" x 18\"",
    "1 Afilador universal"
  ];

  // Otros equipos
  const otrosEquipos = [
    "1 Prensa con capacidad de 50 toneladas",
    "1 Roscadora con capacidad de 1\"",
    "1 Escoplo capacidad de 110mm cuñeros",
    "1 Equipo de corte capacidad de 3\" soplete"
  ];

  // Materiales que manejan
  const materiales = [
    "Aceros Inoxidables",
    "Grado Herramienta", 
    "Grado Maquinaria",
    "Aceros al Carbón",
    "Bronces",
    "Aluminio",
    "Cobre",
    "Latón",
    "Celorón",
    "Nylon Alimenticio",
    "Nylon Normal",
    "Prelubricado",
    "Antifricción",
    "Poligar",
    "Teflón"
  ];

  return (
    <div 
      className={styles.capacidadesContainer}
      style={{ minHeight: `${windowHeight}px` }}
    >
      {/* Background Gradient Orbs */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
      </div>

      {/* Contenido Principal */}
      <div className={styles.mainContent}>
        {/* Header de la Página */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Nuestras Capacidades</h1>
          <p className={styles.pageSubtitle}>
            Metal mecánica y mantenimiento industrial en general con tecnología 
            de vanguardia y amplia experiencia en el sector
          </p>
          <div className={styles.experienceBadge}>
            <FaStar className={styles.experienceIcon} />
            <span>26 Años de Experiencia</span>
          </div>
        </header>

        {/* Grid de Capacidades Principales */}
        <div className={styles.capacidadesGrid}>
          {/* Capacidades de Torno */}
          <div className={styles.capacidadCard}>
            <div className={styles.cardHeader}>
              <FaCog className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Equipos de Torno</h2>
            </div>
            <p className={styles.cardDescription}>
              Contamos con tornos convencionales y CNC para piezas de alta precisión 
              con diferentes capacidades de volteo y longitud.
            </p>
            <ul className={styles.equiposList}>
              {equiposTorno.map((equipo, index) => (
                <li key={index} className={styles.equipoItem}>
                  <FaCheckCircle className={styles.equipoIcon} />
                  <span className={styles.equipoText}>{equipo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capacidades de Fresado */}
          <div className={styles.capacidadCard}>
            <div className={styles.cardHeader}>
              <FaTools className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Equipos de Fresado</h2>
            </div>
            <p className={styles.cardDescription}>
              Fresadoras convencionales y CNC con accesorios especializados 
              para trabajos complejos y de alta precisión.
            </p>
            <ul className={styles.equiposList}>
              {equiposFresado.map((equipo, index) => (
                <li key={index} className={styles.equipoItem}>
                  <FaCheckCircle className={styles.equipoIcon} />
                  <span className={styles.equipoText}>{equipo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capacidades de Soldadura */}
          <div className={styles.capacidadCard}>
            <div className={styles.cardHeader}>
              <FaFire className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Equipos de Soldadura</h2>
            </div>
            <p className={styles.cardDescription}>
              Soldadura especializada en diferentes materiales con equipos 
              de alta tecnología para trabajos de precisión.
            </p>
            <ul className={styles.equiposList}>
              {equiposSoldadura.map((equipo, index) => (
                <li key={index} className={styles.equipoItem}>
                  <FaCheckCircle className={styles.equipoIcon} />
                  <span className={styles.equipoText}>{equipo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipos de Rectificado */}
          <div className={styles.capacidadCard}>
            <div className={styles.cardHeader}>
              <FaGem className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Rectificado y Acabado</h2>
            </div>
            <p className={styles.cardDescription}>
              Equipos de rectificado para acabados de alta calidad y 
              tolerancias estrictas en piezas de precisión.
            </p>
            <ul className={styles.equiposList}>
              {equiposRectificado.map((equipo, index) => (
                <li key={index} className={styles.equipoItem}>
                  <FaCheckCircle className={styles.equipoIcon} />
                  <span className={styles.equipoText}>{equipo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Otros Equipos */}
          <div className={styles.capacidadCard}>
            <div className={styles.cardHeader}>
              <FaIndustry className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Equipos Especializados</h2>
            </div>
            <p className={styles.cardDescription}>
              Maquinaria auxiliar y equipos especializados para trabajos 
              específicos y mantenimiento industrial integral.
            </p>
            <ul className={styles.equiposList}>
              {otrosEquipos.map((equipo, index) => (
                <li key={index} className={styles.equipoItem}>
                  <FaCheckCircle className={styles.equipoIcon} />
                  <span className={styles.equipoText}>{equipo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materiales */}
          <div className={styles.capacidadCard}>
            <div className={styles.cardHeader}>
              <FaCube className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Materiales</h2>
            </div>
            <p className={styles.cardDescription}>
              Trabajamos con una amplia gama de materiales especializados 
              según sus necesidades y especificaciones técnicas.
            </p>
            <div className={styles.materialesList}>
              {materiales.map((material, index) => (
                <span key={index} className={styles.materialTag}>
                  {material}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Servicios Especiales */}
        <section className={styles.serviciosEspeciales}>
          <h2 className={styles.serviciosTitle}>
            <FaShieldAlt className={styles.serviciosIcon} />
            Servicios Especiales
          </h2>
          <div className={styles.serviciosGrid}>
            <div className={styles.servicioCard}>
              <FaClock className={styles.servicioIcon} />
              <h3 className={styles.servicioTitle}>Servicio 24/7</h3>
              <p className={styles.servicioDescription}>
                Estamos disponibles las 24 horas del día, los 365 días del año 
                para atender sus emergencias industriales.
              </p>
            </div>

            <div className={styles.servicioCard}>
              <FaTruck className={styles.servicioIcon} />
              <h3 className={styles.servicioTitle}>Transporte Incluido</h3>
              <p className={styles.servicioDescription}>
                Contamos con transporte especializado para piezas grandes 
                de maquinaria industrial.
              </p>
            </div>

            <div className={styles.servicioCard}>
              <FaWrench className={styles.servicioIcon} />
              <h3 className={styles.servicioTitle}>Fabricación a Medida</h3>
              <p className={styles.servicioDescription}>
                Fabricamos todo tipo de piezas de acuerdo a sus necesidades 
                específicas y planos técnicos.
              </p>
            </div>

            <div className={styles.servicioCard}>
              <FaHammer className={styles.servicioIcon} />
              <h3 className={styles.servicioTitle}>Mantenimiento Integral</h3>
              <p className={styles.servicioDescription}>
                Servicios completos de mantenimiento preventivo y correctivo 
                para maquinaria industrial.
              </p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

export default Capacidades;