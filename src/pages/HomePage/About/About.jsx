import React from 'react';

function About({ id }) {
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