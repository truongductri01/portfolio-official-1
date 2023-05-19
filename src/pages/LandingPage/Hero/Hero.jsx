import React from "react";

function Hero() {
    return (
        <div>
            <div className=" mb-[2rem]">
                <p className="title text-xl">Hi, I'm Tri Truong</p>
                <p className="title text-subtitle">Software Developer at Intuit</p>
            </div>
            <div>
                <p className="desc text-normal">
                    I am passoniate with solving customers' problems using
                    technologies. My skills are mostly in the frontend side of
                    the development which includes <strong>React</strong>,
                    <strong>TypeScript</strong>.
                </p>
                <br />
                <p className="desc text-normal">
                    I have done two internship with <strong>Intuit</strong> in
                    the last 2 years which give me the understanding of not only
                    how softwares are planned, developed, and deployed but also
                    how softwares make customers' life easier. I have worked
                    closely with 4 different developers and support over 10+
                    customers directly by solving their issues and creating new
                    features for our product.
                </p>
                <br />
                {/* <p className="desc text-normal">
                    I believe I can help your team deliver product with
                    high-quality and satisfy your customers.
                </p> */}
            </div>
        </div>
    );
}

export default Hero;
