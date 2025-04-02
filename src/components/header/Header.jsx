import "./Header.css";
import React, { useEffect, useState } from "react";

function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const onSelectLangue = (event) => {
    localStorage.setItem("language", event.target.value);

    window.location.reload();
  };
  const language = localStorage.getItem("language");

  const [isActive, setIsActive] = useState(false);
  const [isActiveAnother, setIsActiveAnother] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsActive(true);

      setTimeout(() => {
        setIsActive(false);
      }, 2000); // 2 segundos para mover para baixo

      setTimeout(() => {
        setIsActive(true);
      }, 4000); // 2 segundos para mover para cima

      setTimeout(() => {
        setIsActive(false);
        setIsActiveAnother(true);
      }, 5000); // termina a animação após 5 segundos
    };

    startAnimation();
  }, []);
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo">Alves Studio</div>

        <div className={toggle ? "Nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <select
                onChange={onSelectLangue}
                className="select_language"
                name=""
                id="selctLanguage"
              >
                <option value="">
                  {language == "Portuguese"
                    ? "Selecione uma lingua"
                    : "Select a language"}
                </option>
                <option value="Portuguese">Português</option>
                <option value="English">English</option>
              </select>
              <div
                className={`containerAnimationSelect ${
                  isActive ? "active" : isActiveAnother ? "deactive" : ""
                }`}
                id="animatedDiv"
              >
                <h4 className="TextAnimation">
                  {language == "Portuguese"
                    ? "Selecione sua língua"
                    : "Select your language"}
                </h4>
              </div>
            </li>
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>
                {language == "Portuguese" ? "Sobre" : "About"}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                {language == "Portuguese" ? "Habilidades" : "Skills"}
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>
                {language === "Portuguese" ? "Contato" : "Contact"}
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
export default Header;
