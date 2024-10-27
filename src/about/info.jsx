import React from "react";

function info() {
  const language = localStorage.getItem("language");
  return (
    <div className="about__info grid">
      <div className="about__box">
        
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">
        {language === "Portuguese" ? "Horas codando" : "Coding Hours"}
        </h3>
        <span className="about__subtitl">500+</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">
        {language === "Portuguese" ? "Completo" : "Completed"}
        </h3>
        <span className="about__subtitl">
        {language === "Portuguese" ? "10 + projetos" : "10 + projects"}
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">
        {language === "Portuguese" ? "Suporte" : "Support"}
        </h3>
        <span className="about__subtitl">Online 24/7
        </span>
      </div>
    </div>
  );
}

export default info;
