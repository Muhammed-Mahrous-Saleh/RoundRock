import React from "react";

const SectionTitle = ({ children }) => {
    return (
        <h2 className="section-title relative text-4xl md:text-6xl">
            <span className="absolute w-[46px] h-[2px] rotate-[-45deg] top-[5px] left-[-25px]"></span>
            <span className="absolute w-[46px] h-[2px] rotate-[45deg] bottom-[5px] left-[-25px]"></span>
            <span className="absolute w-[46px] h-[2px] rotate-[45deg] top-[5px] right-[-25px]"></span>
            <span className="absolute w-[46px] h-[2px] rotate-[-45deg] bottom-[5px] right-[-25px]"></span>
            {children}
        </h2>
    );
};

export default SectionTitle;
