// App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Capacidades from './pages/Capacidades/Capacidades';
import Nosotros from './pages/Nosotros/Nosotros';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Contacto from './pages/Contacto/Contacto';

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Header />
        
        <main className="main-responsive">
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/inicio' element={<NotFound />} />
            <Route path='/capacidades' element={<Capacidades />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;