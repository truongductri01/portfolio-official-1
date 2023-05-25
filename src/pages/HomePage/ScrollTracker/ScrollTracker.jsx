import React from 'react'

function isSectionInView(section) {
    const scrollTop = window.scrollY;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = sectionTop + section.clientHeight;
    return scrollTop >= sectionTop && scrollTop < sectionBottom;
};

function ScrollTracker({ activeId, setActiveId }) {
    const onClickHandle = (id) => {
    }

    // calculate everything here

    React.useEffect(() => {
        // get all the element for the components
        let aboutSection = document.getElementById("About");
        let resumeSection = document.getElementById("Resume");
        let projectSection = document.getElementById("Projects");

        if (aboutSection && resumeSection && projectSection) {
            // find which one is the current in view
            window.addEventListener('scroll', () => {
                let arr = [
                    { id: "About", element: aboutSection },
                    { id: "Resume", element: resumeSection },
                    { id: "Projects", element: projectSection }
                ];

                for (let obj of arr) {
                    if (isSectionInView(obj.element)) {
                        setActiveId(obj.id);
                    }
                }
            })
        }
    }, [setActiveId]);

    return (
        <div>
            <Tab title="About" id="About" activeId={activeId} onClickHandle={onClickHandle} />
            <Tab title="Resume" id="Resume" activeId={activeId} onClickHandle={onClickHandle} />
            <Tab title="Projects" id="Projects" activeId={activeId} onClickHandle={onClickHandle} />
        </div>
    )
}

const Tab = ({ title, id, activeId, onClickHandle }) => {
    const [isHover, setIsHover] = React.useState(false);
    return (
        <div
            className={`hidden lg:flex items-center cursor-pointer ${id === activeId ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
            onMouseEnter={() => { setIsHover(true) }}
            onMouseLeave={() => { setIsHover(false) }}
            onClick={() => { onClickHandle(id) }}>
            <div className={`h-1 bg-black ${isHover || id === activeId ? "w-16" : "w-8"} transition-all ease-in-out duration-200`}></div>
            <p className='desc text-normal ml-4'>{title}</p>
        </div>
    );
}

export default ScrollTracker