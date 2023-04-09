import React from "react";
import ProyectoIntro from "./ProyectoIntro";
import ProyectoFeatures from "./ProyectoFeatures";
import { images } from "../../images";

function ProyectoProject() {
    return (
        <div>
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
