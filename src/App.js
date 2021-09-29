import "./App.css";
import "fontsource-roboto";
import Landing from "./ui/sections/landing/landing";
import About from "./ui/sections/about/about";
import Projects from "./ui/sections/projects";
import Heading from "./ui/sections/heading";
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";

function App() {
  return (
    <div className="App">
      <Heading />
          <Landing />
        <ScrollAnimation
            animateIn="animate__fadeIn"
            offset={0}
            delay={4500}
            animateOnce={true}
        >
          <About />
          <Projects />
        </ScrollAnimation>
    </div>
  );
}

export default App;
