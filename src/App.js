import React, { useEffect } from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Landing from "./Components/LandingPage/Landing";
import Skill from "./Components/Skills/Skill";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import SideNav from "./Components/SideNav/SideNav";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bgImage">
        <div className="bgBlack overflow-scroll w-100 h-100" data-spy="scroll" data-target=".sideNav" data-offset="50">
            <Landing />
            <About />
            <Skill />
            <Experience />
            <Education />
            <Contact />
        </div>
        <SideNav />
    </div>
  );
}

export default App;
