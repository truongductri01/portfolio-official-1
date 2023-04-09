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
                        className={` w-[300px] h-[200px] sm:w-[600px] sm:h-[400px] last:mr-0 animate-fade-in rounded-xl  ${
                            imgIndex === index ? "block" : "hidden"
                        }`}
                        key={index}
                    />
                ))}
            </div>

            {/* Image controller */}
            <div className=" flex items-center mt-[2rem]">
                <button
                    className="desc text-[1rem] px-8 py-2 bg-slate-200 rounded-xl hidden sm:block"
                    onClick={decrease}
                >
                    Prev
                </button>
                <div className=" flex mx-[2rem]">
                    {images.map((img, index) => (
                        <img
                            className={` w-[60px] h-[40px] sm:w-[120px] sm:h-[80px] bg-gray-400 mr-4 last:mr-0 rounded-lg hover:opacity-100 cursor-pointer ${
                                imgIndex === index
                                    ? "opacity-100"
                                    : "opacity-50"
                            }`}
                            src={img}
                            onClick={() => setImgIndex(index)}
                            key={index}
                            alt="demo"
                        />
                    ))}
                </div>
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
