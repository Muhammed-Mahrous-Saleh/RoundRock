import React from "react";
import SectionTitle from "../components/SectionTItle";
import VerticalCard from "../components/VerticalCard";
import data from "/src/db/data.json";
import Button from "../components/Button";

const Services = () => {
    return (
        <section className="container-fluid section services-section">
            <SectionTitle>Services</SectionTitle>
            <div className="services-cards-container container mx-auto flex flex-wrap gap-7 justify-center py-15">
                {data.services.map((item) => (
                    <VerticalCard key={item.id} {...item} />
                ))}
            </div>
            <Button type="primary">Help Me</Button>
        </section>
    );
};

export default Services;
