import React, { useState, useEffect } from "react";
import { projects } from "../project";
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'

function Projects() {

  const [play, setPlay] = useState(false);

  useEffect(() => {

  }, [play]);


  return (
    <section id="projects">
      <h2 className="heading" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">Projects</h2>
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <div className="myproje" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3000" style={{ backgroundImage: "url('https://files.fm/thumb_show.php?i=58v4k25ue')" }}>
          <a
            href='https://moviebookv2.netlify.app'
            target="_blank"
            rel="noopener noreferrer">
            MovieBook</a>
        </div>
        <div className="myproje" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3000" style={{ backgroundImage: "url('https://files.fm/thumb_show.php?i=yrmbuj32eq')"}}>
          <a
            href='https://pathfinderx.netlify.app/'
            target="_blank"
            rel="noopener noreferrer">
            PathFinder</a>
        </div>
        <div className="myproje" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="3000" style={{ backgroundImage: "url('https://files.fm/thumb_show.php?i=rkcgyc9g4q')" }}>
          <a
            href='https://lenaformproject.netlify.app/'
            target="_blank"
            rel="noopener noreferrer">
            FormProject</a>
        </div>

      </div>


    </section>
  )
}

export default Projects;
