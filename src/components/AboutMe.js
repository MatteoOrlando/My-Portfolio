import React from 'react';
import '../assets/AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container">
      <section className="introduction">
        <h1>Ciao, sono [Il Tuo Nome]</h1>
        <p>
          Sono un Full Stack Developer appassionato e creativo con [x] anni di
          esperienza nel settore IT. La mia passione per il coding e la
          tecnologia mi guida ogni giorno verso nuove sfide.
        </p>
      </section>

      <section className="education">
        <h2>Formazione</h2>
        <ul>
          <li>Laurea in Informatica presso [Università], [Anno]</li>
          <li>Specializzazione in [Campo], conseguita presso [Istituto]</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Competenze Tecniche</h2>
        <p>
          Ho una solida conoscenza di tecnologie come JavaScript, React,
          Node.js, e Database Management. Sono sempre alla ricerca di nuove
          tecnologie e strumenti per migliorare le mie abilità.
        </p>
        <div className="tech-stack">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>SQL</span>
          <span>Git</span>
        </div>
      </section>

      <section className="projects">
        <h2>Progetti di Rilievo</h2>
        <p>
          Ecco alcuni dei progetti sui quali ho lavorato che mostrano la mia
          capacità di trasformare le idee in soluzioni funzionanti:
        </p>
        <ul>
          <li>
            <strong>Project Management Tool</strong>: Un'applicazione che
            facilita la gestione di progetti e team.
          </li>
          <li>
            <strong>E-commerce Platform</strong>: Una piattaforma robusta per il
            commercio elettronico personalizzata per piccole imprese.
          </li>
        </ul>
      </section>

      <section className="interests">
        <h2>Interessi Personali</h2>
        <p>
          Oltre alla tecnologia, mi interesso di [Interessi]. Questi interessi
          mi aiutano a mantenere un equilibrio e a rimanere creativo.
        </p>
      </section>

      <section className="contact-me">
        <h2>Contattami</h2>
        <p>
          Sei interessato a lavorare insieme o vuoi saperne di più? Non esitare
          a contattarmi!
        </p>
        <p>Email: [tua_email@example.com]</p>
        <p>LinkedIn: [LinkedIn Profile]</p>
      </section>
    </div>
  );
}

export default AboutMe;
