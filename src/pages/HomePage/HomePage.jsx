import React from "react";
import Hero from "./Hero/Hero";
import ProjectList from "./ProjectList/ProjectList";
import Resume from "./Resume/Resume";
import About from "./About/About";
import Tabs from "./Tabs/Tabs";
import ProjectModal from "./ProjectList/ProjectModal";

const TAB_ID = {
    PROJECT: "Projects",
    RESUME: "Resume",
    ABOUT: "About",
};

function HomePage() {
    const [tabId, setTabId] = React.useState(TAB_ID.PROJECT);
    const [projectId, setProjectId] = React.useState();
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div
            className={`HomePage w-screen h-screen max-w-full max-h-full flex flex-col lg:grid lg:grid-cols-12 lg:gap-10 relative lg:py-0 overflow-auto px-4 md:px-12`}
        >
            <div className="w-full pt-10 pb-5 lg:py-20 lg:max-h-screen lg:col-start-1 lg:col-end-6 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between">
                <div>
                    <Hero />
                </div>
            </div>
            <div className="w-full pb-5 lg:col-start-6 lg:col-end-13 lg:py-20 relative">
                <ProjectModal
                    open={openModal}
                    projectId={projectId}
                    setOpen={setOpenModal}
                />
                {/* Tab right here */}
                <Tabs tabId={tabId} setTabId={setTabId} tabs={TAB_ID} />
                <div className="w-full h-10"></div>
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
