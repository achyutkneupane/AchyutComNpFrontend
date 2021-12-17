import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";

function Landing() {
    
    return (
        <section id="landingPage" className="container d-flex flex-column justify-content-center align-items-center align-items-md-start w-100 vh-100">
            <div
                className="row w-100"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <div className="col-12">
                    <h1 className="mainTitle text-white text-md-start text-center my-2">
                        Achyut Neupane
                    </h1>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-center justify-content-md-start text-white gap-2">
                        <a
                            href="https://www.linkedin.com/in/achyutkneupane/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2x"
                                style={{ color: "#ffffff" }}
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                            />
                        </a>
                        <a
                            href="https://www.github.com/achyutkneupane/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2x"
                                style={{ color: "#ffffff" }}
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/ThisIsAchyut"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                size="2x"
                                style={{ color: "#ffffff" }}
                                data-aos="fade-up"
                                data-aos-delay="150"
                                data-aos-duration="1000"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/achyut.neupane"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size="2x"
                                style={{ color: "#ffffff" }}
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/AchyutNeupane"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                                size="2x"
                                style={{ color: "#ffffff" }}
                                data-aos="fade-up"
                                data-aos-delay="250"
                                data-aos-duration="1000"
                            />
                        </a>
                        <a
                            href="mailto:achyut072bex@ioepc.edu.np"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                size="2x"
                                style={{ color: "#ffffff" }}
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
