import React from "react";

function BlackLockLogoSVG({ height = "16" }) {
    return (
        <svg
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="3"
                y="1"
                width="10"
                height="13"
                rx="3"
                stroke="black"
                stroke-width="2"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 5C0.895386 5 0 5.89543 0 7V14C0 15.1046 0.895386 16 2 16H14C15.1046 16 16 15.1046 16 14V7C16 5.89543 15.1046 5 14 5H2ZM6.66663 10.3333C6.66663 9.59695 7.26355 9 8 9C8.73633 9 9.33325 9.59695 9.33325 10.3333C9.33325 10.8269 9.06519 11.2578 8.66663 11.4883V12.3333C8.66663 12.7015 8.36816 13 8 13C7.63171 13 7.33325 12.7015 7.33325 12.3333V11.4883C6.93481 11.2578 6.66663 10.8269 6.66663 10.3333Z"
                fill="black"
            />
        </svg>
    );
}

export default BlackLockLogoSVG;
