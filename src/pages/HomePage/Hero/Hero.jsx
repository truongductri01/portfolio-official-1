import React from "react";

function Hero() {
    return (
        <div>
            <div className=" mb-[2rem]">
                <p className="title text-xl">Hi, I'm Tri Truong</p>
                <p className="title text-subtitle">
                    Software Developer at Intuit
                </p>
                <div className="mt-2">
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
            <p className="desc text-normal">
                I am passoniate with solving customers' problems using
                technologies. My skills are mostly in the frontend side of the
                development which includes <strong>React</strong>,
                <strong>TypeScript</strong>.
            </p>
            <br />

            {/* <br /> */}
        </div>
    );
}

export default Hero;
