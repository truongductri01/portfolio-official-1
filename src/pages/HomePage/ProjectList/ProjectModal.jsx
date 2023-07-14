import React from "react";
import VidNoteProject from "../../VidNoteProject/VidNoteProject";
import ProyectoProject from "../../ProyectoProject/ProyectoProject";

function ProjectModal({ projectId, open, setOpen }) {
    React.useEffect(() => {
        // reset the scroll position of the current element
        const element = document.querySelector(".ProjectModal");
        if (element) {
            element.scrollTop = 0;
        }
    }, [projectId]);
    return (
        <div
            className={`
            ProjectModal
            fixed top-0 left-0 w-screen h-max min-h-screen max-w-full max-h-full
            bg-white z-50
            overflow-auto
            animate-fade-in
            lg:absolute lg:w-full lg:h-full
            ${open ? " block" : " hidden"}
            `}
        >
            <div
                className="Header cursor-pointer flex items-center py-5 px-5 sticky top-0 bg-white
                "
                onClick={() => {
                    setOpen(false);
                }}
            >
                <i className="fa fa-long-arrow-left fa-lg"></i>
                <p className="desc text-normal font-semibold ml-2">Back</p>
            </div>
            <div className="px-10 pb-10">
                {projectId === "vidnote" && <VidNoteProject />}
                {projectId === "proyecto" && <ProyectoProject />}
            </div>
        </div>
    );
}

export default ProjectModal;