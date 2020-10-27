import React, { useState, useEffect } from "react";
import rgbToHex from "../utils";

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);
    const [hover, setHover] = useState(false);
    const rgbStr = rgb.join(",");
    const hex = rgbToHex(...rgb);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [alert]);
    const copyToClip = () => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
    };
    return (
        <article
            className={`color ${index > 10 && "color-light"}`}
            style={{ backgroundColor: `rgb(${rgbStr})` }}
            onClick={copyToClip}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <p className="percent-value"> {weight}% </p>
            <p className="color-value"> {hex} </p>
            {alert && <p className="alert"> Copied to clipboard!</p>}
            {hover && !alert && <p className="alert"> Copy </p>}
        </article>
    );
};

export default React.memo(SingleColor);
