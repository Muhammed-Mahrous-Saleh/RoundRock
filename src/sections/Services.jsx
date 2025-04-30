import React from "react";
import SectionTItle from "../components/SectionTItle";
import HorizontalCard from "../components/HorizontalCard";
import data from "../data/services.json";
import Button from "../components/Button";

const Services = () => {
    return (
        <section className="container-fluid section services-section">
            <SectionTItle>Services</SectionTItle>
            <div className="services-cards-container container mx-auto flex flex-wrap gap-7 justify-center py-15">
                {data.services.map((item) => (
                    <HorizontalCard key={item.id} {...item} />
                ))}
            </div>
            <Button type="primary">Help Me</Button>
        </section>
    );
};

export default Services;
