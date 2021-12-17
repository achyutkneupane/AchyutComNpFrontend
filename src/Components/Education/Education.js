import {
  faChalkboardTeacher,
  faSchool,
  faUniversity,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Education() {
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
          <div
            className="w-100"
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h2 className="display-6 d-flex flex-row gap-4 align-items-center">
              <FontAwesomeIcon
                icon={faUniversity}
                style={{ color: "#ffffff" }}
              />
              <b>Bachelors in Computer Science</b>
            </h2>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h3 className="display-7">
                Sunway International Business School
              </h3>
              <span className="text-base">Sept. 21 - Running</span>
            </div>
          </div>
          <div
            className="w-100"
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h2 className="display-6 d-flex flex-row gap-4 align-items-center">
              <FontAwesomeIcon
                icon={faUserGraduate}
                style={{ color: "#ffffff" }}
              />
              <b>Higher Secondary Level</b>
            </h2>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h3 className="display-7">Bharabi Science Academy (H.S.S)</h3>
              <span className="text-base">June 13 - June 15</span>
            </div>
          </div>
          <div
            className="w-100"
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h2 className="display-6 d-flex flex-row gap-4 align-items-center">
              <FontAwesomeIcon icon={faSchool} style={{ color: "#ffffff" }} />
              <b>Lower Secondary Level</b>
            </h2>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h3 className="display-7">Carmel High School</h3>
              <span className="text-base">May 08 - April 13</span>
            </div>
          </div>
          <div
            className="w-100"
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h2 className="display-6 d-flex flex-row gap-4 align-items-center">
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                style={{ color: "#ffffff" }}
              />
              <b>Primary Level</b>
            </h2>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h3 className="display-7">Depot Higher Secondary School</h3>
              <span className="text-base">May 01 - April 08</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
