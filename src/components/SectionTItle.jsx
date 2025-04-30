import React from "react";

const SectionTItle = ({ children }) => {
    return (
        <h2 className="section-title relative">
            <span class="absolute w-[46px] h-[2px] rotate-[-45deg] top-[5px] left-[-25px]"></span>
            <span class="absolute w-[46px] h-[2px] rotate-[45deg] bottom-[5px] left-[-25px]"></span>
            <span class="absolute w-[46px] h-[2px] rotate-[45deg] top-[5px] right-[-25px]"></span>
            <span class="absolute w-[46px] h-[2px] rotate-[-45deg] bottom-[5px] right-[-25px]"></span>
            {children}
        </h2>
    );
};

export default SectionTItle;
