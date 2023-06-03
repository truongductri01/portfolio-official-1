import React from "react";
import { useNavigate } from "react-router-dom";

function Project({ title, index, description, images, img, id }) {
    const navigate = useNavigate();
    return (
        <div
            className={`
            mb-[3rem] px-6 py-6 last:mb-0 cursor-pointer transition-all duration-200 ease-in
            flex flex-col
            ${id === "vidnote" && "bg-yellow-100 "}
            ${id === "proyecto" && "bg-red-100"}
            rounded-2xl shadow-[0px_4px_4px_4px_#00000024]
            `}
            onClick={() => {
                navigate("/projects/" + id);
            }}
        >
            <div className="flex flex-col md:grid md:grid-cols-12">
                <div className="flex flex-col order-1 col-span-6 lg:col-span-5">
                    {/* <Numbering value={index} /> */}
                    <p className="title text-normal">{title}</p>
                    <p className="desc text-normal mt-5">{description}</p>
                </div>
                <div className="order-2 col-span-1"></div>
                <div className="order-3 col-span-5 mt-5 md:mt-0 lg:col-span-6">
                    <img src={img} alt="" className=" rounded-xl" />
                    <button className="desc rounded-xl text-normal text-blue-500 bg-white px-6 py-2 mt-[2rem] float-right">
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
