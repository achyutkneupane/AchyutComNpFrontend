import React from "react";

function About() {
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
          <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            Hey fellas. I am Achyut Neupane, originally from Dharan, Nepal
            althogh currently residing in Dholahity, Lalitpur.
          </p>
          <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
            I am a self-driven web developer doing PHP for years spending most
            of my time doing Freelancing and personal projects. I am competent
            in Laravel, Livewire, Bootstrap/Tailwind, and have sound knowledge
            of React. I am also into music: done some stage shows and also
            posted cover videos on my YouTube Channel.
          </p>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            I always have been fascinated by webpages. How they work was the key
            but most importantly, how they are made were the road to learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
