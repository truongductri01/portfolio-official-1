import React from "react";
import { useNavigate } from "react-router-dom";

function Project({ title, index, description, images, img, id }) {
    const navigate = useNavigate();
    return (
        <div
            className={` mb-[5rem] px-2 last:mb-0 cursor-pointer transition-all duration-200 ease-in
            ${id === "vidnote" && "bg-yellow-100 "}
            ${id === "proyecto" && "bg-red-100"}
            sm:px-6 
            rounded-2xl  py-6 shadow-[0px_4px_4px_4px_#00000024]`}
            onClick={() => {
                navigate("/" + id);
            }}
        >
            <div className=" flex items-center">
                <Numbering value={index} />
                <p className="title text-[3rem] ml-[1.5rem]">{title}</p>
            </div>

            <div
                className=" flex items-center pl-[2rem] mt-[2.5rem]
                sm:pl-[4rem]"
            >
                <p className="desc text-normal">{description}</p>
            </div>

            {/* <div className=" flex w-full justify-between overflow-y-auto scrollbar-hide mt-[2.5rem]">
                {images.map((img, index) => (
                    <div
                        className=" min-w-[300px] h-[200px] bg-gray-500 rounded-xl mr-5 last:mr-0"
                        key={index}
                    ></div>
                ))}
            </div> */}
            <div className=" w-full flex items-center justify-end">
                <button className="desc rounded-xl text-normal text-blue-500 bg-white px-6 py-2">
                    Learn more
                </button>
            </div>
            <div className=" mt-[2.5rem]">
                <img src={img} alt="" width={"100%"} className=" rounded-xl" />
            </div>
        </div>
    );
}

const Numbering = ({ value }) => {
    return (
        <div
            className={`flex items-center justify-center w-[3.75rem] h-[3.75rem] border-l-solid border-r-4 border-r-black`}
        >
            <p className="title text-normal">{value}</p>
        </div>
    );
};

export default Project;
