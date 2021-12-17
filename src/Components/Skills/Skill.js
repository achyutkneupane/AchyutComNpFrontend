import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faDocker,
  faGitAlt,
  faJs,
  faLaravel,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Skill() {
  return (
    <section
      id="skills"
      className="container d-flex flex-column justify-content-center align-items-center align-items-md-start w-100 sectionDivider gap-4"
      style={{ paddingTop: "15vh" }}
    >
      <div className="row w-100">
        <div className="col-12">
          <h2 className="text-white display-1 font-weight-bold text-center">
            <strong
              className="text-center sectionTitle"
              data-aos="fade-in"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              Skills
            </strong>
          </h2>
        </div>
      </div>
      <div className="row w-100">
        <div className="col-12 text-white lead">
          <div className="row justify-content-center">
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out-right"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faPhp}
                size="4x"
                style={{ color: "#474A8A" }}
              />
              <div className="display-6">PHP</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faPython}
                size="4x"
                style={{ color: "#306998" }}
              />
              <div className="display-6">Python</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out-left"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faJs}
                size="4x"
                style={{ color: "#f0db4f" }}
              />
              <div className="display-6">JavaScript</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faLaravel}
                size="4x"
                style={{ color: "#fb503b" }}
              />
              <div className="display-6">Laravel</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faReact}
                size="4x"
                style={{ color: "#61dbfb" }}
              />
              <div className="display-6">React</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faBootstrap}
                size="4x"
                style={{ color: "#563d7c" }}
              />
              <div className="display-6">Bootstrap</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out-right"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                width="80px"
                alt="tailwindCSS"
              />
              <div className="display-6">Tailwind</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faGitAlt}
                size="4x"
                style={{ color: "#f1502f" }}
              />
              <div className="display-6">Git</div>
            </div>
            <div
              className="col-6 col-lg-4 text-center p-2 p-lg-4"
              data-aos="zoom-out-left"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <FontAwesomeIcon
                icon={faDocker}
                size="4x"
                style={{ color: "#0db7ed" }}
              />
              <div className="display-6">Docker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
