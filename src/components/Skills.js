import React from 'react';
import htmlcssIcon from '../assets/htmlcss.png';

function Skills() {
  const skills = [
    {
      title: "Python",
      desc: "Lenguaje versátil que uso para automatizar tareas...",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
      className: "python"
    },
    {
      title: "HTML & CSS",
      desc: "Con ellos creo estructuras limpias y semánticas...",
      icon: htmlcssIcon,
      className: "html-css"
    },
    {
      title: "JavaScript",
      desc: "Lenguaje fundamental del desarrollo web...",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      className: "javascript"
    },
    {
      title: "Sistemas Operativos",
      desc: "Manejo de sistemas Windows y Linux...",
      icon: "https://img.icons8.com/windows/48/000000/laptop.png",
      className: "os"
    },
    {
      title: "Excel",
      desc: "Experiencia en manejo de datos con funciones avanzadas...",
      icon: "https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png",
      className: "excel"
    },
    {
      title: "Illustrator",
      desc: "Diseño gráfico vectorial de logotipos...",
      icon: "https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png",
      className: "illustrator"
    },
    {
      title: "Photoshop",
      desc: "Dominio en edición de fotos y retoque digital...",
      icon: "https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png",
      className: "photoshop"
    }
  ];

  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <div className="container">
        <div className="row g-3">
          {skills.map((skill, index) => (
            <div key={index} className={`col-12 skill-item ${skill.className} d-flex align-items-center p-3 rounded`}>
              <img src={skill.icon} alt={skill.title} className="icon" />
              <div>
                <h5 className="mb-1 text-white">{skill.title}</h5>
                <p className="mb-0 text-light">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
