import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas as solidIcons } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import moment from "moment";

function Education() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_LINK+"educations")
      .then((res) => res.json())
      .then(
        (result) => {
          setEducations(result);
        },
        (error) => {}
      );
  }, []);

  return (
    <section
      id="education"
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
              Education
            </strong>
          </h2>
        </div>
      </div>
      <div className="row w-100">
        <div className="col-12 text-white d-flex flex-column gap-5">
          {educations?.map(education => {
            return (
                <div
                className="w-100"
                data-aos="flip-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                key={'education-'+education.id}
                >
                <h2 className="display-6 d-flex flex-row gap-4 align-items-center">
                    <FontAwesomeIcon
                        icon={solidIcons[education.icon]}
                        style={{ color: '#ffffff' }}
                    />
                    <b>{education.type}</b>
                </h2>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="display-7">
                    {education.institute}
                    </h3>
                    <span className="text-base">
                    {moment(education.started_at).format("MMM YY")} -{" "}
                    {education.completed_at ? moment(education.completed_at).format("MMM YY") : 'Running'}
                    </span>
                </div>
                </div>
            )})}
        </div>
      </div>
    </section>
  );
}

export default Education;
