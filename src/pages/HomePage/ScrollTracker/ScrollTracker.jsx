import React from 'react'

function ScrollTracker({ activeId }) {
    const onClickHandle = (id) => {
        // console.log("Id:", id);
        // let element = document.getElementById(id);
        // if (element) {
        //     window.scrollTo({ top: element.getBoundingClientRect().top, behavior: "smooth" })
        // }
    }
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