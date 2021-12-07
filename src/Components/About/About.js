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
                        <strong className='sectionTitle'>
                            About Me
                        </strong>
                    </h2>
                </div>
            </div>
            <div className='row w-100'>
                <div className='col-12 text-white lead text-center border'>
                    Vivamus nec fringilla felis, pretium interdum odio. Pellentesque et eros eget nibh bibendum accumsan in vitae nisi. Vestibulum imperdiet lorem non augue sodales, nec feugiat diam rutrum. Nullam aliquet, nulla in bibendum viverra, nisi augue tristique odio, sed fermentum turpis justo accumsan libero. Nulla euismod hendrerit consequat. Mauris sodales, sem at fermentum mattis, diam turpis bibendum velit, eu scelerisque nibh nibh luctus tortor. Aliquam non purus nec sem bibendum ultrices interdum nec erat. Ut a mollis ligula. Fusce sit amet mi sed mauris rhoncus consectetur. Proin non aliquet est. Pellentesque luctus porta mollis. Nam mattis leo et nisl condimentum, feugiat blandit lectus eleifend. Maecenas pharetra eros sit amet neque venenatis, nec suscipit ligula convallis. Nullam elementum, quam in fermentum egestas, odio tellus posuere nulla, vitae fermentum eros lectus vitae eros. Curabitur non lorem lacus.
                </div>
            </div>
        </section>
    );
}

export default About;
