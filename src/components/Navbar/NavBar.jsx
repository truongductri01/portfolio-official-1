import React from "react";
import Logo from "../Logo/Logo";

function NavBar() {
    return (
        <div className=" flex justify-between items-center w-full mb-[3.75rem]">
            <Logo width={100} height={100} />
            <div className=" flex items-center justify-between w-min">
                <p className="desc mr-10 text-normal sm:mr-20">Work</p>
                <p className="desc text-normal">Info</p>
            </div>
        </div>
    );
}

export default NavBar;
