import React from 'react';

export default function Home() {
  return (
    <>
      <header className="header">
        <h1>Peluquería Canina Lili</h1>
        <p>¡Cuidado, amor y estilo para tu peludo!</p>
      </header>

      <main className="main">
        <h2>Servicios</h2>
        <ul>
          <li>🛁 Baño con productos especiales</li>
          <li>✂️ Corte de pelo profesional</li>
          <li>🧼 Limpieza de oídos y corte de uñas</li>
        </ul>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Peluquería Canina Lili. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
