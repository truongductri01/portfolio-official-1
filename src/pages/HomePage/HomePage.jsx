import React from 'react';
import Hero from './Hero/Hero';
import ProjectList from './ProjectList/ProjectList';
import Resume from './Resume/Resume';
import About from './About/About';
import ScrollTracker from './ScrollTracker/ScrollTracker';

function HomePage() {
    const [activeId, setActiveId] = React.useState();

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div className='HomePage px-10 w-full h-full max-w-full max-h-full flex flex-col lg:grid lg:grid-cols-12 lg:gap-10 relative lg:py-0 py-24'>
            <div className='w-full pb-20 lg:py-20 lg:max-h-screen lg:col-start-1 lg:col-end-6 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between'>
                <div>
                    <Hero />
                    <ScrollTracker setActiveId={setActiveId} activeId={activeId} />
                </div>
            </div>
            <div className='w-full lg:col-start-6 lg:col-end-13 lg:py-20'>
                <About id={"About"} />
                <Resume id={"Resume"} />
                <ProjectList id={"Projects"} />
            </div>
        </div>
    )
}

export default HomePage