import React from "react";

function Hero() {
    return (
        <div>
            <div className=" mb-[2rem]">
                <p className="title text-xl">Hi, I'm Tri Truong</p>
                <p className="title text-subtitle">Software Developer at Intuit</p>
            </div>
            <p className="desc text-normal">
                I am passoniate with solving customers' problems using
                technologies. My skills are mostly in the frontend side of
                the development which includes <strong>React</strong>,
                <strong>TypeScript</strong>.
            </p>
            {/* <br /> */}
        </div>
    );
}

export default Hero;
