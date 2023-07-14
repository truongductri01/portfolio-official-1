import React from "react";
import { images } from "../../../images";

function About({ id }) {
    return (
        <div className="w-full" id={id}>
            {/* <p className="title text-blue-700 text-subtitle lg:hidden">About</p> */}
            <div className=" flex items-center justify-center relative sm:float-left w-max h-max m-5">
                <div className="absolute bottom-0 w-full h-1/2 bg-sky-300 z-0 rounded-[20px_20px_0_0] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                <img
                    className=" w-[150px] sm:w-[200px] z-10"
                    src={images.portrait}
                    alt=""
                />
            </div>

            <p className="desc text-normal text-justify">
                I have done two internship with <strong>Intuit</strong> in the
                last 2 years which give me the understanding of not only how
                softwares are planned, developed, and deployed but also how
                softwares make customers' life easier. I have worked closely
                with 4 different developers and support over 10+ customers
                directly by solving their issues and creating new features for
                our product.
            </p>
            <br />
            {/* <p className="desc text-normal">
                    I believe I can help your team deliver product with
                    high-quality and satisfy your customers.
                </p> */}
        </div>
    );
}

export default About;
