import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-1">
        <ul>
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
      </div>
      <div className="footer-2">Bahadır Bağ</div>
    </footer>
  );
}

export default Footer;
