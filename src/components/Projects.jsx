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

   
</section>
)}

export default Projects;
