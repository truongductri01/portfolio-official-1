import React, { useEffect } from "react";
import Intro from "./Intro";
import { images } from "../../images";
import Demo from "./Demo";
import Takeaway from "./Takeaway";

function MocknrollProject() {
    useEffect(() => {
        document.body.scrollTop = 0;
    }, []);
    return (
        <div className=" pb-8 border-b-solid border-b-4 border-b-black">
            <Intro />
            <img
                src={images.mocknroll.landingPage}
                alt="Landing Page"
                className="w-full"
            />
            {/* Demo video */}
            <Demo />
            <Takeaway />
        </div>
    );
}

export default MocknrollProject;
