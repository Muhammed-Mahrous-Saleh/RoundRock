import React from "react";
import Star from "./Star";

const HorizontalCard = ({ img, title, comment, rate }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rate >= i) {
            stars.push(<Star ratio={100} />);
        } else if (rate > i - 1) {
            stars.push(<Star ratio={(rate - (i - 1)) * 100} />);
        } else {
            stars.push(<Star ratio={0} />);
        }
    }
    return (
        <div className="horizontal-card max-w-md w-full lg:max-w-full lg:flex border-1 p-6">
            <img
                className="w-15 h-15 rounded-full md:mr-3 mb-3"
                src={img}
                alt="Avatar of a person"
            />
            <div className="testimonial-content flex flex-col gap-3">
                <div className="testimonial-title">{title}</div>
                <p className="testimonial-comment text-base">{comment}</p>
                <div className="stars-container">
                    {stars.map((item) => item)}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;
