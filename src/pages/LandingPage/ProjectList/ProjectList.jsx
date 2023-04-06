import Project from "./Project";
import { data } from "../../../constants/data";
import { useMemo } from "react";

function ProjectList() {
    const projects = useMemo(() => data.projects, []);
    return (
        <div className=" py-[2.5em] border-y-2 border-y-black border-y-solid mt-[6.25em]">
            {projects.map((project, index) => (
                <Project {...project} index={index + 1} key={index} />
            ))}
        </div>
    );
}

export default ProjectList;
