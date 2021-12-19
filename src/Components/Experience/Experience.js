import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import moment from "moment";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/experiences")
      .then((res) => res.json())
      .then(
        (result) => {
          setExperiences(result);
        },
        (error) => {}
      );
  }, []);

  return (
    <section
      id="experience"
      className="container d-flex flex-column justify-content-center align-items-center align-items-md-start w-100 sectionDivider gap-4 py-4"
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
              Experience
            </strong>
          </h2>
        </div>
      </div>
      <div className="row w-100">
        <div className="col-12 text-white d-flex flex-col">
          {experiences?.map((experience) => (
            <div className="w-100" key={"experience-" + experience.id}>
              <h2
                className="display-5 d-flex flex-row gap-4 align-items-center"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon
                  icon={brandIcons[experience.icon]}
                  style={{ color: experience.color }}
                />
                <b>{experience.title}</b>
              </h2>
              <div
                className="d-flex flex-row justify-content-between align-items-center"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3 className="display-7">{experience.company_name}</h3>
                <span className="text-base">
                  {moment(experience.started_at).format("MMM YY")} -{" "}
                  {moment(experience.left_at).format("MMM YY")}
                </span>
              </div>
              <div
                className="lead"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                {experience.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
