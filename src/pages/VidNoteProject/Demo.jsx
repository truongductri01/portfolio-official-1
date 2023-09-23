import React from "react";

function Demo() {
    return (
        <div className="mb-[4rem]">
            <p className="title text-[2.5rem] mb-[1rem]">Demo</p>
            <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/LXtE2jTU3BA?si=NdxhHHUEhS7IzIfF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className=" my-[1rem]"
            ></iframe>
        </div>
    );
}

export default Demo;
