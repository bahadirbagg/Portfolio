import React,{useState,useEffect} from "react";
import { projects } from "../project";
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'

function Projects() {

const [play,setPlay] = useState(false);

useEffect( () => {

}, [play]);


  return (
  <section id="projects">
    <h2 className="heading" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  data-aos-duration="1000">Projects</h2>
    <div className="myproje" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3000" style={{ backgroundImage: "url('https://files.fm/thumb_show.php?i=58v4k25ue')" }}><a
                          href='https://moviebookv2.netlify.app'
                          target="_blank"
                          rel="noopener noreferrer">
                      MovieBook</a></div>

    <h4 data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3000" className="projects-h4">Other Projects</h4>

    <ul className="projects-background" >
        {projects.map((proje) => {
        return (
          <li className="project-li" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000"  key={proje.id}>
              <div
                  className="project-inner"  onMouseOver={() => setPlay(true)} onMouseOut={() => setPlay(false)}
              >   
                  <div className="project-top" >
                        <div className="folder">
                            <i className="fa-regular fa-folder"></i>
                        </div>
                        <div className="project-animation">
                        </div>
                  </div>
                  <h3 className="project-title">
                      <a
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
)}

export default Projects;