import React from "react";
import { vidnote } from "../../constants/data";

function Intro() {
    const { intro } = vidnote;
    return (
        <div>
            <div>
                <p className="title text-[3.25rem] mb-10">{intro.title}</p>
                {intro.desc.map((desc, index) => (
                    <p className="desc text-normal mb-5 last:mb-0" key={index}>
                        {desc}
                    </p>
                ))}
            </div>

            <div className=" mt-10">
                <p className="title text-normal mb-[1rem]">My Role</p>
                <p className="desc text-normal">{intro.role}</p>
            </div>

            <div className=" mt-10 flex">
                <p className="title text-normal">Source code:</p>
                <a
                    className="desc text-normal ml-3 text-blue-500 underline"
                    href={intro.sourceCodeUrl}
                    target="blank"
                >
                    {intro.sourceCode}
                </a>
            </div>
        </div>
    );
}

export default Intro;
