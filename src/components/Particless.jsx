import React from "react";
import Particles from "react-tsparticles";

function Particless() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 50,
              duration: 2,
              size: 4,
              opacity: 0,
            },
            repulse: {
              distance: 200,
              duration: 2,
            },
          },
        },
      }}
    />
  );
}

export default Particless;
