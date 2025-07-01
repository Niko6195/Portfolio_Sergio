import React from 'react';

function Contact() {
  const contacts = [
    {
      label: "Email:",
      text: "sergio95angulo@gmail.com",
      icon: "https://img.icons8.com/material-outlined/24/000000/email--v1.png"
    },
    {
      label: "LinkedIn:",
      text: "linkedin.com/in/sergioangulo",
      icon: "https://img.icons8.com/ios-glyphs/24/000000/linkedin.png"
    },
    {
      label: "GitHub:",
      text: "github.com/niko6195",
      icon: "https://img.icons8.com/material-outlined/24/000000/github.png"
    },
    {
      label: "Teléfono:",
      text: "+591 72287099",
      icon: "https://img.icons8.com/ios-glyphs/24/000000/phone.png"
    }
  ];

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <ul>
        {contacts.map((item, index) => (
          <li key={index}>
            <img src={item.icon} alt={item.label} className="icon-contact" />
            <strong>{item.label}</strong> {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
