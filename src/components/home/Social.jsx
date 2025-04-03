import React from "react";
import './home.css'

function Social() {
  return (
    <div className="home__social">
      {/* <a
        href="https://github.com/thiagoHenrique847"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a> */}
      <a
        href="https://www.instagram.com/alves.studioweb/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram-alt"></i>
        
      </a>
      <a
        href="https://wa.me/551992408003"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-whatsapp-alt"></i>
        
      </a>
    </div>
  );
}

export default Social;
