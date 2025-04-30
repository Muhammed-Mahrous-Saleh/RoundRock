import React from "react";
import SectionTitle from "../components/SectionTItle";
import data from "/src/db/data.json";
import HorizontalCard from "../components/HorizontalCard";

const Testimonials = () => {
    return (
        <section className="container-fluid section testimonials-section">
            <SectionTitle>Testimonials</SectionTitle>
            <div className="testimonials-cards-container container mx-auto grid gap-5 md:w-[80%] md:grid-cols-2 grid-auto-flow justify-center py-15 ">
                {/* <HorizontalCard
                    key={data.testimonials[0].id}
                    {...data.testimonials[0]}
                /> */}
                {data.testimonials.map((item) => (
                    <HorizontalCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
