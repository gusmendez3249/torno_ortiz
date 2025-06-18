import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence} from 'framer-motion';
import type {  Variants } from 'framer-motion';

import { 
  FaHome, 
  FaCog, 
  FaUsers, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaTools,
  FaPhone,
  FaClock
} from 'react-icons/fa';
import CotizationForm from '../Cotizar/CotizationForm';
import styles from './Header.module.css';

interface NavItem {
  name: string;
  path: string;
  icon: React.ComponentType<any>;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCotizationModalOpen, setIsCotizationModalOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: 'Inicio', path: '/', icon: FaHome },
    { name: 'Capacidades', path: '/capacidades', icon: FaCog },
    { name: 'Nosotros', path: '/nosotros', icon: FaUsers },
    { name: 'Contacto', path: '/contacto', icon: FaEnvelope }
  ];

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Cerrar modal al presionar Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCotizationModalOpen(false);
      }
    };

    if (isCotizationModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isCotizationModalOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCotizationModal = () => {
    setIsCotizationModalOpen(true);
    setIsMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  const closeCotizationModal = () => {
    setIsCotizationModalOpen(false);
  };

 const handleCotizationSubmit = (formData: any) => {
    console.log('Datos recibidos en Contacto:', formData);
     
  };

  // SOLO el contenido tiene animaciones, no el header completo
  const logoVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  const navVariants: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const contactInfoVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.7 }
    }
  };

  const ctaSectionVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.9 }
    }
  };

  const mobileMenuButtonVariants: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.6, delay: 1 }
    }
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* Header SIN animación inicial - permanece estático */}
      <header 
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
        {/* Efectos de fondo - siempre visibles */}
        <div className={styles.backgroundEffects}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
        </div>

        {/* Solo el contenido del header tiene animaciones */}
        <motion.div 
          className={styles.headerContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Section */}
          <motion.div 
            className={styles.logoSection}
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Link to="/" className={styles.logoLink}>
              <motion.div 
                className={styles.logoIcon}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTools />
              </motion.div>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>TORNO ORTIZ</span>
                <span className={styles.logoSub}>Servicio Industrial</span>
              </div>
            </Link>
          </motion.div>

          {/* Contact Info - Solo desktop */}
          <motion.div 
            className={styles.contactInfo}
            variants={contactInfoVariants}
            initial="initial"
            animate="animate"
          >
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <div className={styles.contactText}>
                <span>(462) 143-47-18</span>
                <span>462-139-35-86</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaClock className={styles.contactIcon} />
              <div className={styles.contactText}>
                <span>Servicio 24/7</span>
                <span>365 días del año</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className={styles.nav}
            variants={navVariants}
            initial="initial"
            animate="animate"
          >
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  variants={navItemVariants}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.path}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    <IconComponent className={styles.navIcon} />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div 
                        className={styles.activeIndicator}
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* CTA Button - Ahora abre el modal */}
          <motion.div 
            className={styles.ctaSection}
            variants={ctaSectionVariants}
            initial="initial"
            animate="animate"
          >
            <button 
              onClick={openCotizationModal}
              className={styles.ctaButton}
            >
              <FaEnvelope className={styles.ctaIcon} />
              <span>Cotizar</span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            variants={mobileMenuButtonVariants}
            initial="initial"
            animate="animate"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className={styles.mobileMenuContent}>
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 }
                      }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <Link 
                        to={item.path}
                        className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <IconComponent className={styles.mobileNavIcon} />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile Contact Info */}
                <motion.div 
                  className={styles.mobileContactInfo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className={styles.mobileContactItem}>
                    <FaPhone className={styles.mobileContactIcon} />
                    <div>
                      <span>(462) 143-47-18</span>
                      <span>462-139-35-86</span>
                    </div>
                  </div>
                  <div className={styles.mobileContactItem}>
                    <FaClock className={styles.mobileContactIcon} />
                    <div>
                      <span>Servicio 24/7 • 365 días</span>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile CTA - También abre el modal */}
                <motion.div
                  className={styles.mobileCta}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button 
                    onClick={openCotizationModal}
                    className={styles.mobileCtaButton}
                  >
                    <FaEnvelope className={styles.ctaIcon} />
                    <span>Solicitar Cotización</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modal de Cotización */}
      <AnimatePresence>
        {isCotizationModalOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCotizationModal}
          >
            <motion.div
              className={styles.modalContent}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.modalCloseButton}
                onClick={closeCotizationModal}
              >
                X
              </button>
              
              <CotizationForm 
                onSubmit={handleCotizationSubmit}
                title="Solicitar Cotización"
                showTitle={true}
                className="modal"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;