import React from "react";

const HorizontalCard = ({ img, title, des }) => {
    return (
        <>
            <div class="horizontal-card max-w-sm rounded-3xl overflow-hidden shadow-lg">
                <div className="card-img-container h-[290px] overflow-hidden">
                    <img
                        class="w-full object-cover h-full"
                        src={img}
                        alt={title}
                    />
                </div>
                <div class="px-6 py-7">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-700 text-base">{des}</p>
                </div>
            </div>
        </>
    );
};

export default HorizontalCard;
