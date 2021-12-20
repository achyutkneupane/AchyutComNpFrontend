import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons";
import ReactHtmlParser from 'html-react-parser';

function Skill({resources}) {
  const skills = resources.skills.read();
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
              {skills?.map((skill,key) => {
                if(skill.icon_type === 'fa') {
                  return (<div
                    className="col-6 col-lg-4 text-center p-2 p-lg-4"
                    data-aos={key%3 === 0 ? 'zoom-out-right' : (key%3 === 1 ? 'zoom-out' : 'zoom-out-left')}
                    data-aos-delay={Math.floor(key/3)*150}
                    data-aos-duration="1000"
                    key={skill.id}
                  >
                    <FontAwesomeIcon
                      icon={brandIcons[skill.icon]}
                      size="4x"
                      style={{ color: skill.color }}
                    />
                    <div className="display-6">{skill.title}</div>
                  </div>)
                }
                else if(skill.icon_type === 'svg')
                {
                  return (
                    <div
                      className="col-6 col-lg-4 text-center p-2 p-lg-4"
                      data-aos={key%3 === 0 ? 'zoom-out-right' : (key%3 === 1 ? 'zoom-out' : 'zoom-out-left')}
                      data-aos-delay={Math.floor(key/3)*150}
                      data-aos-duration="1000"
                      key={skill.id}
                    >
                      {ReactHtmlParser(skill.icon)}
                      <div className="display-6">{skill.title}</div>
                    </div>
                  )
                }
                return 0;
                })}
            </div>
          </div>
        </div>
    </section>
  );
}

export default Skill;
