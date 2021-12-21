import React, { useState } from "react";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSending, setFormSending] = useState(false);
  const [success, setSuccess] = useState(null);

  function sendContact(event) {
    event.preventDefault();
    setFormSending(true);
    setSuccess(null);
    fetch(process.env.REACT_APP_API_LINK + "contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setSuccess(response);
        setFormSending(false);
        setFullName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setSuccess(false);
        setFormSending(false);
      });
  }

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
              placeholder="Full Name"
              value={fullName}
              onChange={(ev) => setFullName(ev.target.value)}
              required
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control form-control-sm bg-transparent text-white"
              id="emailAddress"
              placeholder="Email Address"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
            <label htmlFor="emailAddress">Email Address</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control form-control-sm bg-transparent text-white"
              placeholder="Enter Your Message"
              id="messageBox"
              style={{ height: "200px" }}
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              required
            ></textarea>
            <label htmlFor="messageBox">Message</label>
          </div>
          <div className="form-row text-center mt-1 mb-3">
            {success === null ? (
              ""
            ) : success ? (
              <div className="text-success">The message sent successfully.</div>
            ) : (
              <div className="text-danger">
                There is an error with message. Please try again.
              </div>
            )}
          </div>
          <div className="form-row w-100">
            {formSending ? (
              <button
                className="btn btn-outline-light bg-transparent btn-lg w-100"
              >
                Sending...
              </button>
            ) : (
              <button
                className="btn btn-outline-light bg-transparent btn-lg w-100"
                onClick={sendContact}
              >
                Submit
              </button>
            )}
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
