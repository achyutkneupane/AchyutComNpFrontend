import React from "react";

function Contact() {
  return (
    <section
      id="contactMe"
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
              Contact Me
            </strong>
          </h2>
        </div>
      </div>
      <div className="row w-100">
        <div
          className="col-12 text-white"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control form-control-sm bg-transparent text-white"
              id="fullName"
              placeholder="name@example.com"
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control form-control-sm bg-transparent text-white"
              id="emailAddress"
              placeholder="name@example.com"
            />
            <label htmlFor="emailAddress">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control form-control-sm bg-transparent text-white"
              placeholder="Enter Your Message"
              id="messageBox"
              style={{ height: "200px" }}
            ></textarea>
            <label htmlFor="messageBox">Message</label>
          </div>
          <div className="form-row w-100">
            <button className="btn btn-outline-light bg-transparent btn-lg w-100">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-12 text-center text-white lead mt-5"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        &copy; Achyut Neupane {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default Contact;
