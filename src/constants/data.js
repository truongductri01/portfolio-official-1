import { images } from "../images";

/**
@type {{
    projects: Array<{
        title: string,
        description: string,
        images: Array<any>,
        id: ("vidnote" | "mocknroll" | "proyecto")
    }>}}
 */
let data = {
    projects: [
        {
            title: "YouTube VidNote",
            description:
                "A project that helps YouTube viewers to document their thoughts and share that to their friends",
            images: ["", "", "", "", ""],
            img: images.vidnote.overview,
            id: "vidnote",
        },
        // {
        //     title: "MockNRoll",
        //     description:
        //         "A hackathon project developed with the integration of ChatGPT which help conduct mock interviews and provide realtime feedback",
        //     images: ["", "", ""],
        //     img: images.vidnote.overview,
        //     id: "mocknroll",
        // },
        // {
        //     title: "Proyecto Salvavidas",
        //     description:
        //         "A charity digital platform that raise funds to support 150+ children in Venezuela",
        //     images: ["", "", ""],
        //     img: images.vidnote.overview,
        //     id: "proyecto",
        // },
    ],
};

export const vidnote = {
    intro: {
        title: "YouTube VidNote",
        desc: [
            "Have you ever watch a YouTube video that you really enjoy? After some days, when you re-watch it, do you still remember the main ideas of the video? I did not. I really want to note down my thoughts and understanding after watching a YouTube video. And that's how VidNote was created.",
            "VidNote is a personal project that will help people document their thoughts after watching a YouTube video. Moreover, they can make their notes public so that their friends, or anyone who have the access to the Internet could see it.",
        ],
        role: "As the sole developer, I was able to work on all stages of the development including: Planning, Researching, Coding, and Hosting",
        sourceCode: "vidnote-fullstack",
        sourceCodeUrl: "https://github.com/truongductri01/vidnote-fullstack",
    },
    features: [
        {
            title: "Searching for Videos and writing Notes",
            desc: [
                "Utilizing the YouTube Data Api offered by Google, the application allows user to search for desire videos and start writing notes with the results returned.",
            ],
            images: [
                images.vidnote.searchPage,
                images.vidnote.takingNote1,
                images.vidnote.takingNote2,
                images.vidnote.viewNote,
            ],
            img: "",
        },
        {
            title: "Authenticate and Store data with Firebase",
            desc: [
                "Instead of building my own Authentication feature which will have more risk of exposing users’ credentials, I utilize Firebase Develop Kit to handle the hard work for me.",
                "The only task that is left will be designing a form to register and sign in a user.",
                "Also, any data related to notes or videos is store in Firestore, a feature offered by Firebase",
            ],
            images: [],
            img: images.vidnote.login,
        },
        {
            title: "A Chrome Extension",
            desc: [
                "Provide an extension that will redirect the user from YouTube to the application to start taking note ",
            ],
            images: [],
            img: images.vidnote.chromeExtension,
        },
    ],
    technologies: {
        frontend: [
            { name: "React", icon: "" },
            { name: "TypeScripte", icon: "" },
            { name: "Tailwind", icon: "" },
        ],
        backend: [
            { name: "SpringBoot", icon: "" },
            { name: "Java", icon: "" },
            { name: "YouTube Data Api", icon: "" },
        ],
    },
    lessons: [
        {
            title: "Searching for Videos and writing Notes",
            desc: [
                "Utilizing the YouTube Data Api offered by Google, the application allows user to search for desire videos and start writing notes with the results returned.",
            ],
            img: "",
        },
        {
            title: "Authenticate and Store data with Firebase",
            desc: [
                "Instead of building my own Authentication feature which will have more risk of exposing users’ credentials, I utilize Firebase Develop Kit to handle the hard work for me.",
                "The only task that is left will be designing a form to register and sign in a user.",
                "Also, any data related to notes or videos is store in Firestore, a feature offered by Firebase",
            ],
            img: "",
        },
        {
            title: "A Chrome Extension",
            desc: [
                "Provide an extension that will redirect the user from YouTube to the application to start taking note ",
            ],
            img: "",
        },
    ],
};

export const resume = {
    education: {
        school: "Drexel University",
        degree: "B.S. Computer Science (3.85 GPA)",
        location: "Philadelphia, PA",
        graduation: "Sep 2019 - Expected Jun 2024",
        courses:
            "- Relevant Coursework: Computer Programming, Algorithms and Analysis, Data Structures, Software Architecture, Systems Architecture, Systems Programming",
    },
    experiences: [
        {
            company: "Intuit",
            position: "Software Engineering Intern - QuickBooks team",
            location: "Mountain View, CA",
            time: "Jun 2022 - Sep 2022",
            desc: [
                "Developed an algorithm that automatically categorized 100,000+ trips using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>GraphQl</strong>",
                "Created an API which transformed Google Trips' records into mileage models and stored them in <strong>DynamoDB</strong>",
                "Maintained cross-platform design by deploying a feature which utilized <strong>Google Maps API</strong> for places suggestion",
                "Constructed coding standards for the team which reduced development and onboarding time",
                "Collaborated with 3 engineers on supporting 10+ customers, resolving 5+ issues, and delivering 3 new features",
            ],
        },
        {
            company: "Intuit",
            position: "Software Engineering Intern - QuickBooks team",
            location: "Mountain View, CA",
            time: "May 2021 - Dec 2021",
            desc: [
                "Reduced the number of on-calls each week from 2 to 1 person and unified the UI/UX for both QBO's and QBSE's mileage tracking feature by developing a single plugin using <strong>React</strong> and <strong>TypeScript</strong>",
                "Improved the product's interface and UX by delivering 3 responsive components and 2 algorithms",
                "Monitored 10,000+ customers' product usage via <strong>Segment</strong> and <strong>Amplitude</strong>, and fulfilled 6 feature requests",
                "Increased the platform's design consistency by renovating multiple components using Intuit's internal library",
            ],
        },
        {
            company: "Sharing Excess",
            position: "Software Engineering Intern",
            location: "Philadelphia, PA",
            time: "Mar 2021 - May 2021",
            desc: [
                "Developed 10+ features for a web app which monitored the delivery of over 3 million pounds of food using frontend technologies (<strong>React</strong>, <strong>JavaScript</strong>, <strong>Sass</strong>, and <strong>Firebase</strong>)",
                "Improved the product's interface and UX by delivering 3 responsive components and 2 algorithms",
                "Monitored 10,000+ customers' product usage via <strong>Segment</strong> and <strong>Amplitude</strong>, and fulfilled 6 feature requests",
                "Increased the platform's design consistency by renovating multiple components using Intuit's internal library",
            ],
        },
    ],
};

export { data };
