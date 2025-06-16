// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Capacidades from './pages/Capacidades';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div 
        style={{
          width: '100%',
          overflowX: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <Header />
        
        <main style={{ 
          flex: 1,
          paddingTop: '80px',
          overflowX: 'hidden',
          width: '100%'
        }}>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/inicio' element={<Welcome />} />
            <Route path='/capacidades' element={<Capacidades />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;