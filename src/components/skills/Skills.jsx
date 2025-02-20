import Backend from './Backend';
import Frontend from './Frontend';
import './Skills.css'
import React from "react";

function Skills() {
  const language = localStorage.getItem("language");
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">
      {language == "Portuguese" ? "Habilidades" : "Skills"}
      </h2>
      <span className="section__subtitle">
      {language == "Portuguese" ? "Meu nível técnico" : "My tecnhical level"}
      </span>

      <div className="skills__container container grid">
    <Frontend/>
    <Backend/>
      </div>
    </section>
  );
}

export default Skills;
