import React from "react";
import './SideNav.css';

function SideNav() {
    return (
        <div className="position-fixed mb-4 d-none d-lg-flex sideNav text-end justify-content-start bottom-0">
            <ul className="scrollspy list-unstyled sectionList display-5">
                <li>
                    <a className="text-uppercase my-4 text-white text-decoration-none" href="#landingPage">
                        Home
                    </a>
                </li>
                <li>
                    <a className="text-uppercase my-4 text-white text-decoration-none" href="#aboutMe">
                        About
                    </a>
                </li>
                <li>
                    <a className="text-uppercase my-4 text-white text-decoration-none" href="#skills">
                        Skills
                    </a>
                </li>
                <li>
                    <a className="text-uppercase my-4 text-white text-decoration-none" href="#experience">
                        Experience
                    </a>
                </li>
                <li>
                    <a className="text-uppercase my-4 text-white text-decoration-none" href="#education">
                        Education
                    </a>
                </li>
                <li>
                    <a className="text-uppercase my-4 text-white text-decoration-none" href="#contactMe">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideNav
