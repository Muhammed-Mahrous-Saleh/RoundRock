import React from "react";

const VerticalCard = ({ img, title, des }) => {
    return (
        <>
            <div className="vertical-card max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg">
                <div className="card-img-container h-[290px] overflow-hidden">
                    <img
                        className="w-full object-cover h-full"
                        src={img}
                        alt={title}
                    />
                </div>
                <div className="px-6 py-7">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{des}</p>
                </div>
            </div>
        </>
    );
};

export default VerticalCard;
