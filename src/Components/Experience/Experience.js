import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Experience() {
    return (
        <section
            id="experience"
            className="container d-flex flex-column justify-content-center align-items-center align-items-md-start w-100 sectionDivider gap-4"
        >
            <div className="row w-100">
                <div className="col-12">
                    <h2 className="text-white display-1 font-weight-bold text-center">
                        <strong className='sectionTitle'>
                            Experience
                        </strong>
                    </h2>
                </div>
            </div>
            <div className='row w-100'>
                <div className='col-12 text-white d-flex flex-col'>
                    <div className="w-100">
                        <h2 className='display-5 d-flex flex-row gap-4 align-items-center'>
                            <FontAwesomeIcon
                                icon={faLaravel}
                                style={{ color: "#fb503b" }}
                            />
                            <b>Laravel Developer</b>
                        </h2>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <h3 className='display-7'>Kumberland Inc.</h3>
                            <span className='text-base'>Feb. 21 - August 21</span>
                        </div>
                        <div className='lead'>
                            Kumberland is an Ontario-based company that offers outsourced services including Marketing, and Web Development solutions in Canada and the Caribbean.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
