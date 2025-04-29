import React from "react";
import { Children } from "react";
/**
 * @param {string} type {'primary' | 'secondary'}
 * @returns {JSX.Element} */
const Button = ({ type, children, className }) => {
    return (
        <a href="#">
            <div className={`button button-${type} ${className}`}>
                {children}
            </div>
        </a>
    );
};

export default Button;
