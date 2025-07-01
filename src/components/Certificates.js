import React from 'react';
import cert1 from '../assets/Certf1.png';
import cert2 from '../assets/certf2.png';
import cert3 from '../assets/ProgramadorPython.png';
import cert4 from '../assets/google.png';
import cert5 from '../assets/OperadorSistemas.png';

function Certificates() {
  const certificates = [
    { title: "Python Essencial", img: cert1 },
    { title: "Ciberseguridad", img: cert2 },
    { title: "Programador Python", img: cert3 },
    { title: "Google Skills", img: cert4 },
    { title: "Operador de Sistemas", img: cert5 }
  ];

  return (
    <section id="certificates">
      <h2>Certificados</h2>
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-card">
          <img src={cert.img} alt={cert.title} />
          <div className="content">
            <h3>{cert.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Certificates;
