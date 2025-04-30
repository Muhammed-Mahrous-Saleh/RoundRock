import React from "react";

const Star = ({ ratio = "100" }) => {
    return (
        <div className="stars-container">
            <div className="star">
                <div
                    className="fill-element"
                    style={{
                        width: ratio + "%",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Star;
