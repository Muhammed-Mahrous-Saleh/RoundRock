import React from "react";
import { Children } from "react";
/**
 * @param {string} type {'primary' | 'secondary'}
 * @returns {JSX.Element} */
const Button = ({ type, children }) => {
    return <div className={`button button-${type}`}>{children}</div>;
};

export default Button;
