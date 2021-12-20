import React, { useEffect, useState } from "react";
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
    
    const [fullName, setFullName] = useState(null);
    const [facebookLink, setFacebookLink] = useState(null);
    const [instagramLink, setInstagramLink] = useState(null);
    const [linkedinLink, setLinkedinLink] = useState(null);
    const [githubLink, setGithubLink] = useState(null);
    const [youtubeLink, setYoutubeLink] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_LINK+"settings")
        .then(res => res.json())
        .then(
            result => {
                result.map(setting => {
                    switch(setting.key) {
                        case 'fullName':
                            setFullName(setting.value);
                            break;
                        case 'facebookLink':
                            setFacebookLink(setting.value);
                            break;
                        case 'linkedinLink':
                            setLinkedinLink(setting.value);
                            break;
                        case 'githubLink':
                            setGithubLink(setting.value);
                            break;
                        case 'instagramLink':
                            setInstagramLink(setting.value);
                            break;
                        case 'youtubeLink':
                            setYoutubeLink(setting.value);
                            break;
                        case 'emailAddress':
                            setEmailAddress(setting.value);
                            break;
                        default:
                            break;
                    }
                    return 0;
                })
            },
            error => {
            }
        );
    }, []);
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
                        {fullName}
                    </h1>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-center justify-content-md-start text-white gap-2">
                        <a
                            href={linkedinLink}
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
                            href={githubLink}
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
                            href={facebookLink}
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
                            href={instagramLink}
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
                            href={youtubeLink}
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
                            href={'mailto:'+emailAddress}
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
