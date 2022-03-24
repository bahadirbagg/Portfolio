import React,{useState,useEffect} from "react";
import { projects } from "../project";
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'

function Projects() {

const [play,setPlay] = useState(false);
console.log(play)

useEffect( () => {
    console.log(play);
}, [play]);


  return (<section id="projects">
  <h2 className="heading" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  data-aos-duration="1000">Projects</h2>
  <ul className="projects-background" >
    {projects.map((proje) => {
      return (
          <li className="project-li" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
              <div
                  className="project-inner"  onMouseOver={() => setPlay(true)} onMouseOut={() => setPlay(false)}
              >   
                  <div class="project-top" >
                        <div className="folder">
                            <i class="fa-regular fa-folder"></i>
                        </div>
                        <div className="project-animation">
                            <UseAnimations  animation={github} size={40} strokeColor="#64ffda" loop={true} autoplay={play} />  
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