import React, { useState } from "react";
import Parser from "html-react-parser";

function About({ resources }) {
  const [settings] = useState(resources.settings.read());
  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);
  window.addEventListener('resize',() => { setScreenWidth(document.documentElement.clientWidth) });
  return (
    <section
      id="aboutMe"
      className="container d-flex flex-column justify-content-center align-items-center align-items-md-start w-100 sectionDivider gap-4"
    >
      <div className="row w-100">
        <div className="col-12">
          <h2 className="text-white display-1 font-weight-bold text-center">
            <strong
              className="sectionTitle"
              data-aos="fade-in"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              About Me
            </strong>
          </h2>
        </div>
      </div>
      <div className="row w-100">
        <div
          className="col-12 text-white lead text-center"
          style={{ 'fontSize': (screenWidth<576 ? '1.2rem' : '1.5rem' )}}
        >
          {settings?.map((setting) => {
            return setting.key === "aboutMe"
              ? Parser(String(setting.value))
              : null;
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
