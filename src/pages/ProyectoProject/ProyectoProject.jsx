import React from "react";
import ProyectoIntro from "./ProyectoIntro";
import ProyectoFeatures from "./ProyectoFeatures";
import { images } from "../../images";
// import CodeBlock from "../../components/CodeBlock/CodeBlock";

function ProyectoProject() {
    return (
        <div className="pb-8 border-b-solid border-b-4 border-b-black">
            <ProyectoIntro />
            <div className="  w-full h-auto my-[4rem] bg-red-200 p-4 rounded-xl">
                <img
                    className=" w-full h-auto rounded-xl"
                    src={images.proyecto.overviewStraightSvg}
                    alt="demo"
                />
            </div>
            <ProyectoFeatures />
        </div>
    );
}

export default ProyectoProject;
