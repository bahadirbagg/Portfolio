import React from "react";
import SmoothList from "react-smooth-list";
import Particless from "./Particless";
import Projects from "./Projects";
import Skills from "./Skills";
import { InView } from 'react-intersection-observer';

function Main() {
    
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
        <h2 className="heading" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">About Me</h2>
        <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
          Hello! My name is Bahadır and I enjoy creating things that live on the
          internet. My interest in web development started back in 2021.I’m a
          Full-Stack Developer located in Turkey. I have a serious passion for
          web development.I can provide clean code.I also make the website more & more interactive with web animations.A responsive design makes your website accesible to all users, regardless of their device.
        </p>
      </section>
      <Projects/>
      <Skills />
    </div>
  );
}

export default Main;