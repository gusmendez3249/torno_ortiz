import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaIndustry, 
  FaCog, 
  FaTools, 
  FaAward, 
  FaClock, 
  FaTruck,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaPlay,
  FaImage
} from 'react-icons/fa';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer para animaciones estilo Apple
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = [heroRef.current, servicesRef.current, galleryRef.current, experienceRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FaCog,
      title: "Torneado CNC",
      description: "Piezas de alta precisión con tecnología CNC avanzada",
      features: ["Tolerancias mínimas", "Repetibilidad exacta", "Acabados superiores"],
      image: "/api/placeholder/400/300"
    },
    {
      icon: FaTools,
      title: "Fresado Industrial",
      description: "Mecanizado complejo en materiales especializados",
      features: ["Fresadoras CNC", "Capacidad 12\" x 50\"", "Accesorios completos"],
      image: "/api/placeholder/400/300"
    },
    {
      icon: FaIndustry,
      title: "Soldadura Especializada",
      description: "Soldadura de precisión para materiales críticos",
      features: ["Argón inoxidable", "Alta frecuencia", "250 ampers"],
      image: "/api/placeholder/400/300"
    }
  ];

  const galleryItems = [
    {
      type: 'video',
      title: 'Proceso de Torneado CNC',
      description: 'Vea nuestro proceso de mecanizado en acción',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: 'https://youtu.be/Gl7BrP6SFo0?si=xyaCIRc_6E-jeA3l'
    },
    {
      type: 'image',
      title: 'Fresadora Industrial en Operación',
      description: 'Mecanizado de precisión con nuestra fresadora principal',
      src: ''
    },
    {
      type: 'image',
      title: 'Piezas de Alta Precisión',
      description: 'Ejemplos de trabajos realizados en diferentes materiales',
      src: '/api/placeholder/800/450'
    },
    {
      type: 'video',
      title: 'Soldadura Especializada',
      description: 'Técnicas avanzadas de soldadura con argón',
      thumbnail: '/api/placeholder/800/450',
      videoUrl: 'https://example.com/video2.mp4'
    },
    {
      type: 'image',
      title: 'Taller y Maquinaria',
      description: 'Vista general de nuestras instalaciones',
      src: '/api/placeholder/800/450'
    }
  ];

  const stats = [
    { number: "26", label: "Años de Experiencia", icon: FaAward },
    { number: "24/7", label: "Servicio Continuo", icon: FaClock },
    { number: "365", label: "Días del Año", icon: FaClock },
    { number: "100%", label: "Transporte Incluido", icon: FaTruck }
  ];

  const materials = [
    "Aceros Inoxidables", "Grado Herramienta", "Grado Maquinaria", 
    "Aceros al Carbón", "Bronces", "Aluminio", "Cobre", 
    "Latón", "Celorón", "Nylon", "Teflón"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const openVideoModal = (videoUrl: string) => {
    setIsVideoModalOpen(true);
    console.log(videoUrl); 
  };

  return (
    <div className={styles.welcome}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`${styles.hero} ${styles.fadeInSection}`}
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gradientOrb3}></div>
        </div>
        
        <div className={styles.heroContainer}>
          <div className={`${styles.heroContent} ${styles.slideInLeft}`}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Precisión Industrial</span>
              <span className={styles.titleLine2}>desde 1998</span>
            </h1>
            
            <p className={styles.heroDescription}>
              Especializados en mecanizado de alta precisión con <strong>26 años de experiencia </strong> 
              en metal mecánica y mantenimiento industrial. Fabricamos piezas según sus necesidades 
              con la más avanzada maquinaria CNC.
            </p>

            <div className={styles.heroFeatures}>
              <div className={styles.feature}>
                <FaClock className={styles.featureIcon} />
                <span>Servicio 24/7</span>
              </div>
              <div className={styles.feature}>
                <FaTruck className={styles.featureIcon} />
                <span>Transporte Incluido</span>
              </div>
              <div className={styles.feature}>
                <FaAward className={styles.featureIcon} />
                <span>Calidad Garantizada</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <Link to="/contacto" className={styles.ctaButton}>
                <span>Solicitar Cotización</span>
                <FaChevronRight className={styles.ctaIcon} />
              </Link>
              <Link to="/capacidades" className={styles.secondaryButton}>
                <span>Ver Capacidades</span>
              </Link>
            </div>
          </div>

          <div className={`${styles.heroVisual} ${styles.slideInRight}`}>
            <div className={styles.machineIllustration}>
              <div className={styles.machineBase}></div>
              <div className={styles.machineColumn}></div>
              <div className={styles.machineHead}></div>
              <div className={styles.gear1}>⚙️</div>
              <div className={styles.gear2}>⚙️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className={`${styles.services} ${styles.fadeInSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
            <p className={styles.sectionSubtitle}>
              Metal mecánica y mantenimiento industrial especializado
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${styles.serviceCard} ${styles.staggerChild}`}
                style={{ '--index': index } as React.CSSProperties}
              >
                <div className={styles.serviceIcon}>
                  <service.icon />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.serviceImageContainer}>
                  <img src={service.image} alt={service.title} className={styles.serviceImage} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className={`${styles.gallery} ${styles.fadeInSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestro Trabajo</h2>
            <p className={styles.sectionSubtitle}>
              Vea nuestros procesos y resultados en acción
            </p>
          </div>

          <div className={styles.carouselContainer}>
            <button 
              className={styles.carouselButton} 
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <FaChevronLeft />
            </button>

            <div className={styles.carousel}>
              <div 
                className={styles.carouselTrack}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryItems.map((item, index) => (
                  <div key={index} className={styles.carouselSlide}>
                    <div className={styles.slideContent}>
                      {item.type === 'video' ? (
                        <div className={styles.videoContainer}>
                          <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className={styles.videoThumbnail}
                          />
                          <button 
                            className={styles.playButton}
                            onClick={() => openVideoModal(item.videoUrl || '')}
                          >
                            <FaPlay />
                          </button>
                        </div>
                      ) : (
                        <img 
                          src={item.src} 
                          alt={item.title}
                          className={styles.slideImage}
                        />
                      )}
                      <div className={styles.slideInfo}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className={styles.slideType}>
                          {item.type === 'video' ? <FaPlay /> : <FaImage />}
                          <span>{item.type === 'video' ? 'Video' : 'Imagen'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={styles.carouselButton} 
              onClick={nextSlide}
              disabled={currentSlide === galleryItems.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>

          <div className={styles.carouselDots}>
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className={`${styles.experience} ${styles.fadeInSection}`}>
        <div className={styles.container}>
          <div className={styles.experienceContent}>
            <div className={styles.experienceText}>
              <h2 className={styles.experienceTitle}>
                26 Años de <span className={styles.highlight}>Excelencia</span>
              </h2>
              <p className={styles.experienceDescription}>
                Desde 1998, hemos sido el socio confiable de la industria en Irapuato, 
                Guanajuato. Nuestra experiencia abarca desde piezas de precisión hasta 
                mantenimiento industrial completo.
              </p>
              
              <div className={styles.materialsSection}>
                <h3>Materiales que Trabajamos:</h3>
                <div className={styles.materialsList}>
                  {materials.map((material, index) => (
                    <span 
                      key={index}
                      className={styles.materialTag}
                      style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`${styles.statCard} ${styles.countUp}`}
                  style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
                >
                  <stat.icon className={styles.statIcon} />
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              ¿Listo para trabajar juntos?
            </h2>
            <p className={styles.ctaDescription}>
              Contáctanos hoy mismo y descubre cómo podemos ayudarte con tus proyectos industriales.
              Estamos disponibles 24 horas, 365 días del año.
            </p>

            <div className={styles.ctaActions}>
              <Link to="/contacto" className={styles.ctaPrimary}>
                <FaEnvelope className={styles.ctaButtonIcon} />
                <span>Solicitar Cotización</span>
              </Link>
              <a href="tel:4621434718" className={styles.ctaSecondary}>
                <FaPhone className={styles.ctaButtonIcon} />
                <span>(462) 143-47-18</span>
              </a>
            </div>

            <div className={styles.contactQuick}>
              <div className={styles.quickContactItem}>
                <FaMapMarkerAlt className={styles.quickIcon} />
                <span>Irapuato, Guanajuato</span>
              </div>
              <div className={styles.quickContactItem}>
                <FaEnvelope className={styles.quickIcon} />
                <span>ezequiel_ho@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className={styles.videoModal} onClick={() => setIsVideoModalOpen(false)}>
          <div className={styles.videoModalContent}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsVideoModalOpen(false)}
            >
              ×
            </button>
            <video controls autoPlay className={styles.modalVideo}>
              <source src="https://example.com/video.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;