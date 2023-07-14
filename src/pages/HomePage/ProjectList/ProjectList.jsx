import React, { useMemo } from "react";
import Project from "./Project";
import { data } from "../../../constants/data";

function ProjectList({ id, setOpenModal, setProjectId }) {
    const projects = useMemo(() => data.projects, []);
    return (
        <>
            <div className="w-full" id={id}>
                {projects.map((project, index) => (
                    <Project
                        {...project}
                        index={index + 1}
                        key={index}
                        setOpenModal={setOpenModal}
                        setProjectId={setProjectId}
                    />
                ))}
            </div>
        </>
    );
}

export default ProjectList;
