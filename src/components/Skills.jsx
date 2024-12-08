import React from "react";
import {BsFillPatchCheckFill} from "react-icons/bs"

function Skills() {
  
      return (
        <section id="skill">
        <h2 className="heading" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  data-aos-duration="1000">Skills</h2>   
    
            <div class="marquee-text fadeout-horizontal"  data-aos="fade-up">
                <div class="marquee-text-track">
                    <p>JavaScript</p>
                    <p>Material UI</p>
                    <p>CSS</p>
                    <p>TailwindCSS</p>
                    <p>Bootstrap</p>
                    <p>React</p>
                    <p>Python</p>
                    <p>C#</p>
                    <p>Django</p>
                    <p aria-hidden="true">JavaScript</p>
                    <p aria-hidden="true">Material UI</p>
                    <p aria-hidden="true">CSS</p>
                    <p aria-hidden="true">TailwindCSS</p>
                    <p aria-hidden="true">Bootstrap</p>
                    <p aria-hidden="true">React</p>
                    <p aria-hidden="true">Python</p>
                    <p aria-hidden="true">C#</p>
                    <p aria-hidden="true">Django</p>
                </div>
            </div>
                <div class="marquee-text fadeout-horizontal"  data-aos="fade-up">
                <div 
                    style={ 
                        {
                            "--direction": "reverse",
                            "--speed": "20s"
                        }
                    }
                    class="marquee-text-track">
                    <p>JavaScript</p>
                    <p>Material UI</p>
                    <p>CSS</p>
                    <p>TailwindCSS</p>
                    <p>Accessibility</p>
                    <p>React</p>
                    <p>Python</p>
                    <p>C#</p>
                    <p>Django</p>
                    <p aria-hidden="true">JavaScript</p>
                    <p aria-hidden="true">Material UI</p>
                    <p aria-hidden="true">CSS</p>
                    <p aria-hidden="true">TailwindCSS</p>
                    <p aria-hidden="true">Accessibility</p>
                    <p aria-hidden="true">React</p>
                    <p aria-hidden="true">Python</p>
                    <p aria-hidden="true">C#</p>
                    <p aria-hidden="true">Django</p>
                </div>
        </div>
      </section>
      );
   
}

export default Skills;