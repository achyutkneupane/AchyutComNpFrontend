import React, { Suspense, useEffect } from "react";
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
import { settingsFetch } from "./DataFetcher";
import { SpinnerDotted } from "spinners-react";

require("dotenv").config();

const resources = settingsFetch();

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bgImage">
      <div className="bgBlack overflow-scroll w-100 h-100">
        <div className="container px-0 px-sm-4">
          <div className="row w-100">
            <Suspense
              fallback={
                <div class="text-white vh-100 vw-100 d-flex justify-content-center align-items-center">
                  <SpinnerDotted size="10%" color="#ffffff" speed="150" />
                </div>
              }
            >
              <div className="col-12 col-lg-8">
                <Landing resources={resources} />
                <About resources={resources} />
                <Skill resources={resources} />
                <Experience resources={resources} />
                <Education resources={resources} />
                <Contact resources={resources} />
              </div>
              <div className="col-lg-4 d-flex justify-content-end">
                <div className="position-fixed mb-4 d-none d-lg-flex sideNav text-end justify-content-start bottom-0">
                  <SideNav resources={resources} />
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
