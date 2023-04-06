import React from "react";
import { useNavigate } from "react-router-dom";

function Logo({ width, height }) {
    const navigate = useNavigate();
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className=" cursor-pointer w-[2.75rem] h-[2.75rem] sm:w-[5.25rem] sm:h-[5.25rem]"
            onClick={() => {
                navigate("/");
            }}
        >
            <path
                d="M0 20C0 8.95431 8.95431 0 20 0H90C95.5228 0 100 4.47715 100 10C100 15.5228 95.5229 20 90 20H0Z"
                fill="black"
            />
            <path
                d="M40 20H60V90C60 95.5229 55.5228 100 50 100C44.4772 100 40 95.5229 40 90V20Z"
                fill="black"
            />
        </svg>
    );
}

export default Logo;
