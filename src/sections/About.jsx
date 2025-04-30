import React from "react";
import Button from "../components/Button";

const About = () => {
    return (
        <section className="container-fluid about-section ">
            <div className="about-section-clip"></div>
            <div className="container mx-auto flex flex-wrap z-10 relative gap-30 md:gap-10 xl:gap-50 about-section-container">
                <div className="flex-1 about-section-content items-start text-start md:ms-20 max-w-[80%] mx-auto">
                    <h2 className="text-center title">About us</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an
                    </p>
                    <div className="image-container">
                        <img src="../images/aboutus.png" alt="about us image" />
                    </div>
                </div>
                <div className="flex-1 about-section-content items-end text-end justify-center md:me-5 max-w-[80%] mx-auto mb-5">
                    <h2 className="text-center title">Where</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <Button className="z-10 relative" type="secondary">
                Help Me
            </Button>
        </section>
    );
};

export default About;
