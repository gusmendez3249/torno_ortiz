// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // 'useLocation' ya es compatible con TypeScript

const ScrollToTop = (): null => { // Añadimos ': null' para tipificar que no renderiza nada
  const { pathname } = useLocation(); // 'pathname' ya está inferido correctamente por TypeScript

  useEffect(() => {
    // Cada vez que 'pathname' (la ruta) cambie, ejecuta esto
    window.scrollTo(0, 0); // Mueve el scroll a la posición 0, 0 (arriba a la izquierda)
  }, [pathname]); // El efecto se re-ejecuta cuando pathname cambia

  return null; // Este componente no renderiza nada visible
};

export default ScrollToTop;