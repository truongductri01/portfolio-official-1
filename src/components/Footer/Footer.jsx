import React from "react";
import Logo from "../Logo/Logo";

function Footer() {
    return (
        <div
            className=" flex flex-col items-start mt-[2.5rem] h-min
        sm:flex-row sm:justify-between sm:items-end"
        >
            <div className=" flex items-end">
                <Logo />
                <p className="desc text-normal text-right ml-[2rem]">
                    Built by Tri Truong
                </p>
            </div>
            <div className=" flex items-end mt-[2.5rem]">
                <a
                    className="desc text-normal text-blue-600 mr-[3rem]"
                    href="https://www.linkedin.com/in/tridt/"
                    target="blank"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/truongductri01"
                    target="blank"
                    className="desc text-normal text-blue-600 mr-[3rem]"
                >
                    GitHub
                </a>
                <a
                    href="mailto:truongductri01@gmail.com"
                    target="blank"
                    className="desc text-normal text-blue-600"
                >
                    Email
                </a>
            </div>
        </div>
    );
}

export default Footer;
