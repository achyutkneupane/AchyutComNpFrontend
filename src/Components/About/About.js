import React, { useEffect, useState } from "react";
import Parser from 'html-react-parser';

function About() {

    const [settings, setSettings] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/settings")
        .then(res => res.json())
        .then(
            result => {
                setSettings(result);
            },
            error => {
            }
        );
    }, []);
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
          style={{ fontSize: "1.6rem" }}
        >
            {
                settings?.map(setting => {
                    return setting.key === 'aboutMe' ? Parser(String(setting.value)) : null;
                })
            }
        </div>
      </div>
    </section>
  );
}

export default About;
