import React from "react";
import { mocknroll } from "../../constants/mocknrollData";

function Intro() {
    const { intro } = mocknroll;
    return (
        <div className="mb-[2rem]">
            <div>
                <p className="title text-[3.25rem] mb-10">{intro.title}</p>
                {intro.desc.map((desc, index) => (
                    <p
                        className="desc text-normal mb-5 last:mb-0"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: desc }}
                    ></p>
                ))}
            </div>

            <div className=" flex flex-col mt-10">
                <div className=" mb-[2rem]">
                    <p className="title text-normal mb-[1rem]">Team</p>
                    <p
                        className="desc text-normal"
                        dangerouslySetInnerHTML={{ __html: intro.team }}
                    />
                </div>
                <div className="">
                    <p className="title text-normal mb-[1rem]">My Role</p>
                    <p
                        className="desc text-normal"
                        dangerouslySetInnerHTML={{ __html: intro.role }}
                    ></p>
                </div>
            </div>

            <div className=" mt-10 flex">
                <p className="title text-normal">View:</p>
                <a
                    className="desc text-normal ml-3 text-red-600 underline"
                    href={intro.webpage}
                    target="blank"
                >
                    {intro.title}
                </a>
            </div>
        </div>
    );
}

export default Intro;
