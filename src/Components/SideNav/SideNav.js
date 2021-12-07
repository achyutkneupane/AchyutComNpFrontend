import React from "react";

function SideNav() {
    return (
        <div className="container fixed-bottom mb-4 d-none d-lg-block sideNav">
            <div className="w-100 row justify-content-end text-right p-2">
                <div className="col-5 text-end p-2 display-5">
                    <ul className="scrollspy list-unstyled sectionList">
                        <li>
                            <a className="text-uppercase my-4 text-white text-decoration-none" href="#landingPage">
                                Top
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
            </div>
        </div>
    )
}

export default SideNav
