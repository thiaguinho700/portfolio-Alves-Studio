import React from "react";
import "./footer.css";

function Footer() {
  const language = localStorage.getItem("language");
  return (
    <footer className="footer">
      <div className="footer_container conteiner">
        <h1 className="footer__title">Thiago Alves</h1>

        <ul className="footer__list">
          <li>
            <a
              href="https://www.linkedin.com/in/thiago-alves17/"
              className="footer__link"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thiagoHenrique847"
              className="footer__link"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thiago.freelas/"
              className="footer__link"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>

        <span className="footer__copy">
        &#169; 
          {language === "Portuguese"
            ? "ThiagoAlves. Todos os direitos reservados."
            : "ThiagoAlves. All rights reserved."}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
