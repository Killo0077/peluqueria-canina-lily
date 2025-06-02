import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      {/* ✅ Bubble animation layer */}
      <div className="bubbles">
        {[...Array(60)].map((_, i) => {
          const size = Math.floor(Math.random() * 40) + 10; // size between 10–50px
          const left = Math.random() * 100; // random left position in %
          const duration = Math.random() * 8 + 6; // 6–14s

          return (
            <span
              key={i}
              className="bubble"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>

      {/* Navigation bar */}
      <nav className='navbar'>
        <ul>
          <li><a href='#inicio'>Inicio</a></li>
          <li><a href='#Servicios'>Servicios</a></li>
          <li><a href='#Contacto'>Contacto</a></li>
        </ul>
      </nav>

      <div
        className="hero-image"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      ></div>

      {/* Header (now BELOW image) */}
      <header className="header">
        <h1>Peluquería Canina Lili</h1>
        <p>¡Cuidado, amor y estilo para tu peludo!</p>
      </header>

      {/* Main content */}
      <main className="main">
        <div className="card">
          <h2>Servicios</h2>
          <div className="services-images">
            <img src="/bath.png" alt="Baño" />
            <img src="/cut.png" alt="Corte de pelo" />
            <img src="/styling.png" alt="Limpieza" />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Peluquería Canina Lili. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
