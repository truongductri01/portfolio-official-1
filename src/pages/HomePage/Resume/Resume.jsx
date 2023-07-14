import React from "react";
import { resume } from "../../../constants/data";

function Resume({ id }) {
    let { experiences, education } = resume;
    return (
        <div className=" flex flex-col w-full mb-[6.25rem]" id={id}>
            <div className=" w-full">
                <p className="title text-resumeTitle text-blue-700">
                    Education
                </p>
                <Education {...education} />
            </div>

            <div className=" w-full mt-[2rem]">
                <p className="title text-resumeTitle text-blue-700">
                    Experiences
                </p>
                {experiences.map((exp, index) => (
                    <Experience key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}

const Experience = ({ company, position, location, time, desc }) => {
    return (
        <div className=" flex flex-col w-full mt-[1rem]">
            <div className=" flex flex-col items-center justify-between w-full sm:flex-row">
                <div className="w-full">
                    <p className="title text-resumeSubtitle text-blue-700">
                        {company}
                    </p>
                    <p className="title text-resumeDesc sm:text-resumeSubtitle text-sky-500">
                        {position}
                    </p>
                </div>
                <div className=" flex justify-between w-full items-end sm:flex-col">
                    <p className="title text-resumeDesc sm:text-resumeSubtitle">
                        {location}
                    </p>
                    <p className="title text-resumeDesc sm:text-resumeSubtitle">
                        {time}
                    </p>
                </div>
            </div>
            <div className="w-full">
                <ul className=" sm:pl-4">
                    {desc.map((d, index) => (
                        <li
                            className="desc text-resumeDesc mt-[0.5rem] last:mt-0 sm:text-resumeSubtitle"
                            key={index}
                            dangerouslySetInnerHTML={{ __html: "- " + d }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Education = ({ school, degree, location, graduation, courses }) => {
    return (
        <div className=" flex flex-col w-full mt-[1rem]">
            <div className=" flex flex-col items-center justify-between w-full sm:flex-row">
                <div className="w-full">
                    <p className="title text-resumeSubtitle">{school}</p>
                    <p className="title text-resumeSubtitle">{degree}</p>
                </div>
                <div className=" flex justify-between w-full items-end sm:flex-col">
                    <p className="title text-resumeDesc sm:text-resumeSubtitle">
                        {location}
                    </p>
                    <p className="title text-resumeDesc sm:text-resumeSubtitle">
                        {graduation}
                    </p>
                </div>
            </div>

            <p className="desc text-resumeDesc sm:text-resumeSubtitle mt-[0.5rem]">
                {courses}
            </p>
        </div>
    );
};

export default Resume;
