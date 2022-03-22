import React from "react";

function Navbar() {
  return (
    <menu className="main-menu">
      <div className="main-menu__top">
        <a className="logo" rel="home" href="/">
          <span>Bahadır</span>
        </a>

        <span>Web Developer</span>
      </div>

      <nav className="main-menu_nav">
        <a rel="about" href="/#about">
          About
        </a>

        <a rel="projects" href="/#projects">
          Projects
        </a>

        <a rel="resume" href="https://online.flippingbook.com/view/21788245/">
          Resume
        </a>
      </nav>

      <ul className="social">
        <li>
          {" "}
          <a
            href="https://github.com/bahadirbagg"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/bahadirbagg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in fa-lg"></i>
          </a>
        </li>
      </ul>
    </menu>
  );
}

export default Navbar;
