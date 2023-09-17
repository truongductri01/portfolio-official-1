import { images } from "../images";

export const mocknroll = {
    intro: {
        title: "MockNRoll",
        desc: [
            "<strong>MockNroll</strong> is a project created with the integration of <strong>GenAI</strong>, including <strong>ChatGPT</strong>, with the purpose of providing a mock interview platform which support real-time feedbacks.",
            "The project was created from scratch during a hackathon and received the recognition of the <strong>Best Creative Project.</strong>",
        ],
        role: "I was responsible for creating the complete frontend for the project along the side with Tung Tran, another member on the team. We utilized React/Redux, TypeScript, and Socket to maintain the frontend. We also integrated a Text-to-speech library which helps us analyze users' speech and send that to the backend.",
        team: "The team comprise of 6 college students working on different aspects of the project, including backend, frontend, and project management. After the hackathon, we recruit more people to help us handle the marketing and business side with the purpose of raising the project as a start up.",
        // sourceCode: "vidnote-fullstack",
        // sourceCodeUrl: "https://github.com/truongductri01/vidnote-fullstack",
        webpage: "https://devpost.com/software/mock-roll",
        status: "Available on the internet",
    },
    features: [
        {
            title: "A feature allowing the admin to create posts for multiple children simultaneously",
            desc: [
                "Just by picking the children from a desire house (or all of the houses), the admin could customize a list of children which will then be used to generate a list of posts. The content of the post will be similar for all the of children, with the purpose of notifying the sponsors assigned with a child with a certain message",
            ],
            images: [
                images.proyecto.massivePortSelectHouse,
                images.proyecto.massivePost,
                images.proyecto.massivePostReady,
            ],
            img: "",
        },
        {
            title: "Pubsub Birthday email feature",
            desc: [
                "Every child has a birthday and we want to celebrate that. The feature helps set up a pubsub function that notify the sponsors any time the birthday of a child is comming.",
                "The image below show the set up for the cloud scheduler function on <strong>Google Cloud Platform</strong>",
            ],
            images: [],
            img: images.proyecto.pubSubBirthday,
        },

        {
            title: "Warning Mailling Feature",
            desc: [
                "Every house will consist of some children that need to receive the money from a sponsor.",
                "Therefore, whenever the number of children in a house drops below 40, we want to notify the admin so that they could work on finding more children to fill in the list.",
                "The code below show the logic of sending an email whenever such situation happens.",
            ],
            images: [],
            img: images.proyecto.warningMailling,
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
