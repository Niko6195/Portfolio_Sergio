import React from 'react';
import proyecto1 from '../assets/arbieto.jfif';
import proyecto2 from '../assets/teatro.jfif';
import proyecto3 from '../assets/billetera.png';

function Projects() {
  const projects = [
    {
      title: "Municipio de Arbieto",
      img: proyecto1,
      desc: "Desarrollo de sitio institucional con diseño responsivo y contenido dinámico para la alcaldía de Arbieto."
    },
    {
      title: "Base de Datos Teatro",
      img: proyecto2,
      desc: "Gestión de funciones y reservas con MySQL, optimizando procesos administrativos en un teatro local."
    },
    {
      title: "Billetera Electrónica",
      img: proyecto3,
      desc: "Proyecto en Python para que los usuarios administren sus finanzas, categoricen gastos y generen reportes claros."
    }
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.img} alt={project.title} />
          <div className="content">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
