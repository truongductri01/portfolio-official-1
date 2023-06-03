import React from "react";
import { images } from "../../images";

function ScrollBackTop() {
    return (
        <div
            className="fixed bottom-2 right-2 cursor-pointer opacity-50 hover:opacity-100 z-50"
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
