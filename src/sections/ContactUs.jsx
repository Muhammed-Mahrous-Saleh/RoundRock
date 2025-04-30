import React from "react";
import SectionTitle from "../components/SectionTItle";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
    return (
        <>
            <div className="section contactus-section">
                <SectionTitle>Contact Us</SectionTitle>
                <div className="container mx-auto contactus-content flex gap-30 px-7 justify-center flex-wrap items-center">
                    <div className="contactus-form">
                        <ContactForm />
                    </div>
                    <div className="contactus-info">
                        <a
                            href="mailto:upskilling.eg1@gmail.com"
                            className="email-address info-element"
                        >
                            <div className="icon envelope"></div>
                            upskilling.eg1@gmail.com
                        </a>

                        <a
                            href="tel:+201154932137"
                            className="phone-number info-element"
                        >
                            <div className="icon phone"></div>
                            {"+20 115 493 2137"}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
