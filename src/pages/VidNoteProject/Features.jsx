import React from "react";
import { vidnote } from "../../constants/data";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

function Features() {
    let { features } = vidnote;
    return (
        <div>
            <p className="title text-[2.5rem] mb-[3rem]">Features</p>
            {features.map((feature, index) => (
                <SingleFeature {...feature} key={index} index={index} />
            ))}
        </div>
    );
}

const SingleFeature = ({ title, desc, images, img, index }) => {
    return (
        <div className=" mb-[2rem] last:mb-0">
            <div className=" flex items-center">
                <Numbering value={index + 1} />
                <p
                    className="title text-normal ml-[1.25rem]"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </div>
            <div className=" my-[1.25rem] pl-4">
                {desc.map((d) => (
                    <p
                        className="desc text-normal mb-4 last:mb-0"
                        dangerouslySetInnerHTML={{ __html: d }}
                    />
                ))}
            </div>

            {images.length > 0 ? (
                <ImageSlider images={images} />
            ) : (
                <div className=" flex items-center justify-center border-2 border-solid border-black p-4 rounded-xl bg-gray-200">
                    <img
                        src={img}
                        alt="demo"
                        className=" w-[300px] h-auto sm:w-[600px] sm:h-auto rounded-xl"
                    />
                </div>
            )}
        </div>
    );
};

const Numbering = ({ value }) => {
    return (
        <div
            className={`flex items-center justify-center w-[2.5rem] h-[2.5rem] border-l-solid border-r-4 border-r-black`}
        >
            <p className="title text-normal">{value}</p>
        </div>
    );
};

export default Features;
