import React from "react";

function MicrosoftLogoSVG({ height = "24" }) {
    return (
        <svg
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="11" height="11" fill="#F1511B" />
            <rect y="13" width="11" height="11" fill="#07A6F0" />
            <rect x="13" width="11" height="11" fill="#80CC28" />
            <rect x="13" y="13" width="11" height="11" fill="#FBBC09" />
        </svg>
    );
}

export default MicrosoftLogoSVG;
