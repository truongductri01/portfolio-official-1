import React from "react";
import { useNavigate } from "react-router-dom";

function Project({ title, index, description, images, img, id }) {
    const navigate = useNavigate();
    return (
        <div
            className={`
            mb-[3rem] px-2 py-2 last:mb-0 cursor-pointer transition-all duration-200 ease-in
            flex flex-col
            ${id === "vidnote" && "bg-yellow-100 "}
            ${id === "proyecto" && "bg-red-100"}
            sm:px-6 
            sm:py-6
            rounded-2xl shadow-[0px_4px_4px_4px_#00000024]
            `}
            onClick={() => {
                navigate("/" + id);
            }}
        >
            <div className="grid grid-cols-12">
                <div className="flex items-center order-1 col-span-4 lg:col-span-5">
                    {/* <Numbering value={index} /> */}
                    <p className="title text-normal mr-2">{title}</p>
                </div>
                <div className="order-2 col-span-8 lg:col-span-7">
                    <img src={img} alt="" className=" rounded-xl" />
                </div>
            </div>

            <div className="mt-[2rem]">
                <div className=" flex items-center">
                    <p className="desc text-normal">{description}</p>
                </div>

                <div className=" w-full flex items-center justify-end">
                    <button className="desc rounded-xl text-normal text-blue-500 bg-white px-6 py-2">
                        Learn more
                    </button>
                </div>
            </div>

        </div>
    );
}

// const Numbering = ({ value }) => {
//     return (
//         <div
//             className={`flex items-center justify-center w-[3.75rem] h-[3.75rem] border-l-solid border-r-4 border-r-black`}
//         >
//             <p className="title text-normal">{value}</p>
//         </div>
//     );
// };

export default Project;
