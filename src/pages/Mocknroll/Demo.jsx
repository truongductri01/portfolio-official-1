import React from "react";

function Demo() {
    return (
        <div className="mt-[3rem]">
            <p className="title text-[2.5rem] mb-[1rem]">Demo</p>
            <p className=" desc text-normal">
                There is a lot to share about the project so a quick demo video
                should give you brief understanding of what we have done
            </p>

            <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/vL19orVVeiI?si=qgxOwRiiSsJOsU0e"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="mt-[1rem]"
            ></iframe>

            <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/RcmpjME7sd4?si=kvCRBt7JbdWo6GPr"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="mt-[1rem]"
            ></iframe>
        </div>
    );
}

export default Demo;
