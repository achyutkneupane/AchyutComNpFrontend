import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/skills")
      .then((res) => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setSkills(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div className='vw-100 vh-100 text-danger'>Error: {error.message}</div>;
  }
  else if(!isLoaded) {
    return (
      <div className='vw-100 vh-100 text-danger'>Not Loaded</div>
    );
  }
  else {
    return (
      <section
        id="skills"
        className="container d-flex flex-column justify-content-center align-items-center align-items-md-start w-100 sectionDivider gap-4"
        style={{ paddingTop: "15vh" }}
      >
        <div className="row w-100">
          <div className="col-12">
            <h2 className="text-white display-1 font-weight-bold text-center">
              <strong className="text-center sectionTitle">Skills</strong>
            </h2>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12 text-white lead">
            <div className="row justify-content-center">
                <div
                  className="col-6 col-lg-4 text-center p-2 p-lg-4"
                  // key={skill.id}
                >
                  <FontAwesomeIcon
                    icon={faPhp}
                    size="4x"
                    style={{ color: "#474A8A" }}
                  />
                  <div className="display-6">PHP</div>
                </div>
              <div className="col-6 col-lg-4 text-center p-2 p-lg-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                  width="80px"
                  alt="tailwindCSS"
                />
                <div className="display-6">Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
