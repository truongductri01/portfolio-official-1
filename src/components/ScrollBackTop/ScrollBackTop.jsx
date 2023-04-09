import React from "react";
import { images } from "../../images";

function ScrollBackTop() {
    return (
        <div
            className=" hidden sm:block fixed bottom-2 right-2 cursor-pointer opacity-50 hover:opacity-100"
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            <img src={images.arrowUp} alt="arrow up" className=" w-[40px]" />
        </div>
    );
}

export default ScrollBackTop;
