import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaCog, 
  FaUsers, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaTools,
  FaIndustry 
} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const navigationItems = [
    { name: 'Inicio', icon: FaHome, href: 'inicio' },
    { name: 'Capacidades', icon: FaCog, href: 'capacidades' },
    { name: 'Nosotros', icon: FaUsers, href: 'nosotros' },
    { name: 'Contacto', icon: FaEnvelope, href: 'contacto' }
  ];

  return (
    <motion.footer 
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Efectos de fondo */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Logo Section */}
          <motion.div 
            className={styles.footerLogoSection}
            variants={itemVariants}
          >
            <motion.div 
              className={styles.footerLogo}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={styles.logoIcon}
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaTools size={28} />
              </motion.div>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>TORNO ORTIZ</span>
                <span className={styles.logoSub}>Servicio Industrial</span>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.descriptionCard}
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <FaIndustry className={styles.descriptionIcon} />
              <p className={styles.footerDescription}>
                26 años de experiencia en metal mecánica y mantenimiento industrial de precisión.
              </p>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className={styles.footerLinks}
            variants={containerVariants}
          >
            {/* Navegación */}
            <motion.div className={styles.footerColumn} variants={itemVariants}>
              <h3 className={styles.footerTitle}>
                <span className={styles.titleIcon}>🧭</span>
                Navegación
              </h3>
              <ul className={styles.footerNav}>
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li key={item.name} variants={itemVariants}>
                      <motion.a 
                        href={item.href}
                        className={styles.footerLink}
                        whileHover={{ 
                          x: 8,
                          scale: 1.02
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className={styles.linkIcon} />
                        {item.name}
                      </motion.a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Información Legal */}
            <motion.div className={styles.footerColumn} variants={itemVariants}>
              <h3 className={styles.footerTitle}>
                <span className={styles.titleIcon}>📋</span>
                Información Legal
              </h3>
              <motion.div 
                className={styles.legalCard}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 32px rgba(59, 130, 246, 0.15)"
                }}
              >
                <div className={styles.legalInfo}>
                  <p className={styles.legalText}>
                    <strong>Ezequiel Helguera Ortiz</strong>
                  </p>
                  <p className={styles.legalText}>RFC: HEOE-681006-AT2</p>
                  <p className={styles.legalText}>Irapuato, Guanajuato</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contacto */}
            <motion.div className={styles.footerColumn} variants={itemVariants}>
              <h3 className={styles.footerTitle}>
                <span className={styles.titleIcon}>📞</span>
                Contacto
              </h3>
              <div className={styles.contactInfo}>
                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={styles.contactIconWrapper}
                    whileHover={{ rotate: 5 }}
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <div className={styles.contactText}>
                    <span>Calle Rey Alfonso XIII #191</span>
                    <span>Col. Los Reyes C.P. 36570</span>
                    <span>Irapuato, Guanajuato</span>
                  </div>
                </motion.div>

                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={styles.contactIconWrapper}
                    whileHover={{ rotate: 5 }}
                  >
                    <FaPhone />
                  </motion.div>
                  <div className={styles.contactText}>
                    <span>Oficina: (462) 143-47-18</span>
                    <span>Celular: 462-139-35-86</span>
                  </div>
                </motion.div>

                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={styles.contactIconWrapper}
                    whileHover={{ rotate: 5 }}
                  >
                    <FaEnvelope />
                  </motion.div>
                  <span className={styles.contactEmail}>ezequiel_ho@hotmail.com</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className={styles.footerBottom}
          variants={itemVariants}
        >
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              &copy; 2025 Torno y Fresadora Servicio Industrial "Ortiz". Todos los derechos reservados.
            </p>
            <motion.div 
              className={styles.statusBadge}
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className={styles.statusDot}></div>
              <span>Servicio 24 hrs • 365 días del año</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;