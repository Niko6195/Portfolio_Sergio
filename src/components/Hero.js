import React from 'react';
import perfil from '../assets/foto-perfil.jfif';
import fondo from '../assets/fondo.jpg';

function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textShadow: '0 0 8px rgba(0, 0, 0, 0.85)', // <-- sombra para mejorar legibilidad
        }}
      >
        <img
          src={perfil}
          alt="Foto Sergio Nikolas"
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            border: '3px solid #e0e0e0',
            objectFit: 'cover',
            marginBottom: '20px',
          }}
        />
        <h1 style={{ marginBottom: '5px' }}>Sergio Nikolas Angulo Sandoval</h1>
        <p>Tecnólogo en Sistemas Informáticos</p>
      </div>
      {/* Capa oscura semitransparente encima del fondo */}
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(10, 15, 26, 0.85)',
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default Hero;

