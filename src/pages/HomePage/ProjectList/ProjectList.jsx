import React, { useMemo } from "react";
import Project from "./Project";
import { data } from "../../../constants/data";


function ProjectList({ id }) {
    const projects = useMemo(() => data.projects, []);
    return (
        <div className=" py-[2.5em] border-t-2 border-t-black border-t-solid" id={id}>
            {projects.map((project, index) => (
                <Project {...project} index={index + 1} key={index} />
            ))}
        </div>
    );
}

export default ProjectList;
