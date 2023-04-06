import React, { useEffect } from "react";
import Intro from "./Intro";
import { images } from "../../images";
import Features from "./Features";

function VidNoteProject() {
    useEffect(() => {
        document.body.scrollTop = 0;
    }, []);
    return (
        <div className=" pb-8 border-b-solid border-b-4 border-b-black">
            <Intro />
            <img
                className=" w-full h-auto my-[4rem]"
                src={images.vidnote.overviewStraight}
                alt="project Overview"
            />
            <Features />
        </div>
    );
}

export default VidNoteProject;
