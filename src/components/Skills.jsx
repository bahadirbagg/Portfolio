import React from "react";
import {BsFillPatchCheckFill} from "react-icons/bs"

function Skills() {
  
      return (
        <section id="skill">
        <h2 className="heading" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  data-aos-duration="1000">Skills</h2>   
        <div className="skill-container" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
    
            <div className="skill-frontend">
                <h3>Frontend Development</h3>
                <div className="skill-content">
                    <article className="skill-details">
                        <BsFillPatchCheckFill />
                        <h4>HTML</h4>
                    </article>
                    <article className="skill-details">
                        <BsFillPatchCheckFill />  
                        <h4>CSS</h4>
                    </article>
                    <article className="skill-details">
                        <BsFillPatchCheckFill /> 
                        <h4>JavaScript</h4>
                    </article>
                    <article className="skill-details">
                        <BsFillPatchCheckFill />
                        <h4>React</h4>
                    </article>
                </div>
            </div>
            <div className="skill-backend">
                <h3>Backend Development</h3>
                <div className="skill-content">
                    <article className="skill-details">
                        <BsFillPatchCheckFill />
                        <h4>Node JS</h4>
                    </article>
                    <article className="skill-details">
                        <BsFillPatchCheckFill />
                        <h4>MongoDB </h4>
                    </article>
                    <article className="skill-details">
                        <BsFillPatchCheckFill />
                        <h4>Phyton </h4>
                    </article>
                    <article className="skill-details">
                        <BsFillPatchCheckFill />
                        <h4>SQL </h4>
                    </article>
            </div>
            </div>
        </div>
      </section>
      );
   
}

export default Skills;