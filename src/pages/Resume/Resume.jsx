import React from "react";
import { images } from "../../images";
import { resume } from "../../constants/data";

function Resume() {
    let { experiences, education } = resume;
    return (
        <div className=" flex flex-col w-full h-max md:flex-row pb-[1.5rem] border-b-solid border-b-4 border-b-black">
            <div className=" flex flex-col  px-[1.25rem]">
                <div className=" flex items-center justify-center relative">
                    <div className="absolute bottom-0 w-[200px] h-[100px] bg-sky-300 sm:w-[300px] sm:h-[150px] z-0 rounded-[20px_20px_0_0] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                    <img
                        className=" w-[200px] sm:w-[300px] z-10"
                        src={images.portrait}
                        alt=""
                    />
                </div>
                <div className=" flex flex-col items-center mt-[2rem]">
                    <p className="title text-normal text-blue-700">
                        Tri Truong
                    </p>
                    <p className="desc text-normal">Software Developer</p>
                </div>
                {/* <div className=" w-full h-[2px] bg-black"></div> */}

                <div className="mt-[1.5rem]">
                    <p className="title text-normal text-blue-700 ">Contacts</p>
                    <ul className="pl-2">
                        <li>(512)-956-0044</li>
                        <li>truongductri01@gmail.com</li>
                        <li>linkedin.com/in/tridt</li>
                        <li>github.com/truongductri01</li>
                    </ul>
                </div>
                <div className=" my-[2rem] w-full h-[2px] bg-black sm:hidden"></div>
            </div>

            <div className=" flex flex-col w-full grow-[1] lg:pl-[3rem]">
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
                    <p className="title text-resumeSubtitle text-blue-700">
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
