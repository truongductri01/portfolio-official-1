import React, { useMemo } from "react";
import Project from "./Project";
import { data } from "../../../constants/data";

function isSectionInView(section) {
    const scrollTop = window.scrollY;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = sectionTop + section.clientHeight;
    return scrollTop >= sectionTop && scrollTop < sectionBottom;
}

function ProjectList({ id, setActiveId }) {
    const projects = useMemo(() => data.projects, []);
    React.useEffect(() => {
        let tempElement = document.getElementById(id);

        if (tempElement) {
            window.addEventListener('scroll', () => {
                if (isSectionInView(tempElement)) {
                    setActiveId(id);
                }
            })
        }
    }, [id, setActiveId]);
    return (
        <div className=" py-[2.5em] border-t-2 border-t-black border-t-solid" id={id}>
            {projects.map((project, index) => (
                <Project {...project} index={index + 1} key={index} />
            ))}
        </div>
    );
}

export default ProjectList;
