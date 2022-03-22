import React from "react";
import SmoothList from "react-smooth-list";
import Particless from "./Particless";
import { useAnimation } from "react-rebound";
import { projects } from "../project";

function Main() {
  const [hovered, setHovered] = React.useState(false);

  
  const ref = React.useRef();
  useAnimation(ref, {scaleX: hovered ? 1.1 : 1, scaleY: hovered ? 1.1 : 1 });
  
  let astyle={
    color:''
  }
  if(hovered){
    astyle.color="#66fcf1";
  }
    
  return (
    <div>
      <Particless />
      <section id="main-menu">
        <SmoothList delay={200}>
          <h1>Hi, my name is</h1>
          <h2>Bahadır Bağ.</h2>
          <h3>I like building things for the web.</h3>
          <p>I’m a fullstack developer .</p>
        </SmoothList>
      </section>
      <section id="about">
        <h2 className="heading" data-aos="fade-up">About Me</h2>
        <p data-aos="fade-up">
          Hello! My name is Bahadır and I enjoy creating things that live on the
          internet. My interest in web development started back in 2021.I’m a
          Full-Stack Developer located in Turkey. I have a serious passion for
          web development.
        </p>
      </section>
      <section id="projects">
        <h2 className="heading">Projects</h2>
        <ul className="projects-background">
          {projects.map((proje) => {
            return (
                <li className="project-li" data-aos="fade-up" data-aos-anchor-placement="center-center">
                    <div
                        className="project-inner"
                        ref={ref}
                        onMouseOver={() => setHovered(true)}
                        onMouseOut={() => setHovered(false)}
                    >   
                        <div class="project-top">
                            <i class="fa-regular fa-folder"></i>
                        </div>
                        <h3 className="project-title">
                            <a
                                style={astyle}
                                href={proje.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {proje.title}
                            </a>
                        </h3>
                        <div className="project-description">
                            <p>{proje.description}</p>
                        </div>
                        <ul className="project-code">
                            <li>{proje.codes}</li>
                        </ul>
                    </div>
                    </li>
            );
          })}
          </ul> 
      </section>
      <section id="resume">
        <h2 className="heading">Resume</h2>
        <div className="img-container">
          <ul>
            <li>
              <img
                src="cv-1.png"
                alt="cv page 1"
                width="500"
                height="600"
              ></img>
            </li>
            <li>
              <img
                src="cv-2.png"
                alt="cv page 2"
                width="500"
                height="600"
              ></img>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;