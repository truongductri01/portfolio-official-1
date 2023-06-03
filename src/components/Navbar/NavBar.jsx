import React from "react";
import Logo from "../Logo/Logo";
// import { useNavigate } from "react-router";

function NavBar() {
    // const navigate = useNavigate();
    return (
        <div className=" flex justify-between items-center w-full mb-[3.75rem]">
            <Logo />
            <div className=" flex items-center justify-between w-min">
                {/* <p className="desc mr-10 text-normal sm:mr-20 cursor-pointer">Work</p> */}
                {/* <p
                    className="desc text-normal cursor-pointer hover:text-blue-500"
                    onClick={() => {
                        navigate("/resume");
                    }}
                >
                    Resume
                </p> */}
            </div>
        </div>
    );
}

export default NavBar;
