import React from "react";
import Hero from "./Hero/Hero";
import ProjectList from "./ProjectList/ProjectList";
import Resume from "./Resume/Resume";
import About from "./About/About";
import Tabs from "./Tabs/Tabs";
import ProjectModal from "./ProjectList/ProjectModal";
// import ScrollTracker from './ScrollTracker/ScrollTracker';

const TAB_ID = {
    PROJECT: "Projects",
    RESUME: "Resume",
    ABOUT: "About",
};

function HomePage() {
    // const [activeId, setActiveId] = React.useState();
    const [tabId, setTabId] = React.useState(TAB_ID.PROJECT);
    const [projectId, setProjectId] = React.useState();
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div
            className={`HomePage w-full h-full max-w-full max-h-full flex flex-col lg:grid lg:grid-cols-12 lg:gap-10 relative lg:py-0 
            overflow-auto
            no-scrollbar
            `}
        >
            <div className="w-full pt-10 pb-5 lg:py-20 lg:max-h-screen lg:col-start-1 lg:col-end-6 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between">
                <div>
                    <Hero />
                    {/* <ScrollTracker setActiveId={setActiveId} activeId={activeId} /> */}
                </div>
            </div>
            <div className="w-full lg:col-start-6 lg:col-end-13 lg:py-20 relative">
                <ProjectModal
                    open={openModal}
                    projectId={projectId}
                    setOpen={setOpenModal}
                />
                {/* Tab right here */}
                <Tabs tabId={tabId} setTabId={setTabId} tabs={TAB_ID} />
                <div className="w-full h-10"></div> {/* Space */}
                {/* Content rendering right here */}
                {tabId === TAB_ID.PROJECT && (
                    <ProjectList
                        id={"Projects"}
                        setOpenModal={setOpenModal}
                        setProjectId={setProjectId}
                    />
                )}
                {tabId === TAB_ID.RESUME && (
                    <Resume
                        id={"Resume"}
                        setOpenModal={setOpenModal}
                        setProjectId={setProjectId}
                    />
                )}
                {tabId === TAB_ID.ABOUT && (
                    <About
                        id={"About"}
                        setOpenModal={setOpenModal}
                        setProjectId={setProjectId}
                    />
                )}
            </div>
        </div>
    );
}

export default HomePage;
