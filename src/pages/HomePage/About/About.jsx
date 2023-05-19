import React from 'react';

function isSectionInView(section) {
    const scrollTop = window.scrollY + 80;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = sectionTop + section.clientHeight;
    return scrollTop >= sectionTop && scrollTop < sectionBottom;
}
function About({ setActiveId, id }) {

    React.useEffect(() => {
        let tempElement = document.getElementById(id);

        if (tempElement) {
            window.addEventListener('scroll', () => {
                if (isSectionInView(tempElement)) {
                    setActiveId(id);
                }
            });
        }
    }, [id, setActiveId]);
    return (
        <div className='w-full' id={id}>
            <p className="title text-blue-700 text-subtitle lg:hidden">About</p>
            <p className="desc text-normal">
                I have done two internship with <strong>Intuit</strong> in
                the last 2 years which give me the understanding of not only
                how softwares are planned, developed, and deployed but also
                how softwares make customers' life easier. I have worked
                closely with 4 different developers and support over 10+
                customers directly by solving their issues and creating new
                features for our product.
            </p>
            <br />
            {/* <p className="desc text-normal">
                    I believe I can help your team deliver product with
                    high-quality and satisfy your customers.
                </p> */}
        </div>
    )
}

export default About