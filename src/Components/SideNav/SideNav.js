import React from "react";
import Scrollspy from "react-scrollspy";
import "./SideNav.css";

function SideNav({resources}) {
  resources.settings.read();
  resources.skills.read();
  resources.experiences.read();
  resources.educations.read();
  return (
    <Scrollspy
        className="list-unstyled sectionList display-6"
        items={[
        "landingPage",
        "aboutMe",
        "skills",
        "experience",
        "education",
        "contactMe",
        ]}
        currentClassName="display-3"
        offset={-300}
    >
      <li>
        <a
          className="text-uppercase my-4 text-white text-decoration-none"
          href="#landingPage"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="text-uppercase my-4 text-white text-decoration-none"
          href="#aboutMe"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="text-uppercase my-4 text-white text-decoration-none"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="text-uppercase my-4 text-white text-decoration-none"
          href="#experience"
        >
          Experience
        </a>
      </li>
      <li>
        <a
          className="text-uppercase my-4 text-white text-decoration-none"
          href="#education"
        >
          Education
        </a>
      </li>
      <li>
        <a
          className="text-uppercase my-4 text-white text-decoration-none"
          href="#contactMe"
        >
          Contact
        </a>
      </li>
    </Scrollspy>
  );
}

export default SideNav;
