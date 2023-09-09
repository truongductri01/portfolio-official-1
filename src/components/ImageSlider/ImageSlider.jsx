import React, { useCallback, useState } from "react";

function ImageSlider({ images }) {
    const [imgIndex, setImgIndex] = useState(0);

    const increase = useCallback(() => {
        setImgIndex((prevIdx) => (prevIdx + 1) % images.length);
    }, [images.length]);
    const decrease = useCallback(() => {
        setImgIndex((prevIdx) => (prevIdx - 1 + images.length) % images.length);
    }, [images.length]);

    return (
        <div className=" w-full h-max flex flex-col items-center justify-center">
            {/* Image display */}
            <div className=" flex items-center justify-center border-2 border-solid border-black p-4 rounded-xl bg-gray-200">
                {images.map((img, index) => (
                    <img
                        src={img}
                        alt="demo"
                        className={`w-full h-auto rounded-xl  ${
                            imgIndex === index ? "block" : "hidden"
                        }`}
                        key={index}
                    />
                ))}
            </div>

            {/* Image controller */}
            <div className=" flex items-center mt-[2rem]">
                <button
                    className="desc text-[1rem] px-8 py-2 mr-4 bg-slate-200 rounded-xl hidden sm:block"
                    onClick={decrease}
                >
                    Prev
                </button>
                <button
                    className="desc text-[1rem]  px-8 py-2 bg-slate-200 rounded-xl hidden sm:block"
                    onClick={increase}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ImageSlider;
