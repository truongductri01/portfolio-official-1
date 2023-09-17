import React from "react";
import { mocknroll } from "../../constants/mocknrollData";

function Takeaway() {
    const { lessons } = mocknroll;
    return (
        <div className="mt-[3rem]">
            <p className="title text-[2.5rem]">Takeaways</p>
            <p className="desc text-normal mt-[1rem]">
                Through the development process of the project, I have some
                personal lessons learnt
            </p>
            {lessons.map((lesson, index) => (
                <div className="mt-[1rem]">
                    <p className="title text-normal mb-2">
                        {index + 1}. {lesson.title}
                    </p>
                    {lesson.desc.map((description) => (
                        <p className="desc text-normal">- {description}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Takeaway;
