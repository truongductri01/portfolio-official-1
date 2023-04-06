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

export { data };
