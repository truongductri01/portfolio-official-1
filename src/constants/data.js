import { images } from "../images";

/**
@type {{
    projects: Array<{
        title: string,
        description: string,
        images: Array<any>,
        id: ("vidnote" | "mocknroll" | "proyecto"),
        skills: Array<string>
    }>}}
 */
let data = {
    projects: [
        {
            title: "MockNRoll",
            description:
                "A hackathon project developed with the integration of ChatGPT producing mock behavioral interviews with real-time feedback",
            images: ["", "", ""],
            img: images.mocknroll.landingPage,
            id: "mocknroll",
        },
        {
            title: "YouTube VidNote",
            description:
                "A project that helps YouTube viewers document their thoughts and share that to their friends",
            images: ["", "", "", "", ""],
            img: images.vidnote.overview,
            id: "vidnote",
            skills: ["React", "SpringBoot", "Rest API", "YouTube API"],
        },
        {
            title: "Proyecto Salvavidas",
            description:
                "A charity digital platform that raise funds to support 150+ children in Venezuela",
            images: ["", "", ""],
            img: images.proyecto.overview,
            id: "proyecto",
            skills: ["React", "Google Cloud Platform", "MailJet"],
        },
    ],
};

export const vidnote = {
    intro: {
        title: "YouTube VidNote",
        desc: [
            "Have you ever watch a YouTube video that you really enjoy? After some days, when you re-watch it, do you still remember the main ideas of the video? I did not. I really want to note down my thoughts and understanding after watching a YouTube video. And that's how VidNote was created.",
            "VidNote is a personal project that will help people document their thoughts after watching a YouTube video. Moreover, they can make their notes public so that their friends, or anyone who have the access to the Internet could see it.",
        ],
        role: "As the sole developer, I was able to work on all stages of the development including: <strong>Planning</strong>, <strong>Researching</strong>, <strong>Coding</strong>, and <strong>Hosting</strong>",
        sourceCode: "vidnote-fullstack",
        sourceCodeUrl: "https://github.com/truongductri01/vidnote-fullstack",
        status: "Currently down. Finding an alternative host.",
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
                "It could be inconvenient for a user to watch a YouTube video then have to search it again in my app.",
                "To make it more convenient for users and drive more traffic to the app, I have created an extension that will re-direct a user to the application and start the note taking process with the same video playing.",
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
                "Instead of building my own Authentication feature which will have more risk of exposing users' credentials, I utilize Firebase Develop Kit to handle the hard work for me.",
                "The only task that is left will be designing a form to register and sign in a user.",
                "Also, any data related to notes or videos is store in Firestore, a feature offered by Firebase",
            ],
            img: "",
        },
        {
            title: "A Chrome Extension",
            desc: [
                "It could be inconvenient for a user to watch a YouTube video then have to search it again in my app.",
                "To make it more convenient for users and drive more traffic to the app, I have created an extension that will re-direct a user to the application and start the note taking process with the same video playing.",
            ],
            img: "",
        },
    ],
};

export const proyecto = {
    intro: {
        title: "Proyecto Salvavidas",
        desc: [
            "<strong>Proyecto Salvavidas</strong> or <strong>The Lifeguard Project</strong>, created by the Un Par Por Un Sueño foundation, aims to save lives by allowing people to sponsor a child and ensure their basic needs such as food, health, and education.",
            "This initiative emphasizes a personal connection between the sponsor and the sponsored child, with the sponsor being able to witness their growth and support their aspirations.",
            "I was invited to join the team as a volunteer and to work on enhancing the features of the application.",
        ],
        role: "My role involved enhancing the functionality of the app to enable the admin team to perform their tasks seamlessly. This include <strong>Research</strong>, <strong>Planning</strong>, and <strong>Developing</strong>",
        team: "The admin team comprises mostly college students around the world who have great passion in making an impact to society",
        sourceCode: "vidnote-fullstack",
        sourceCodeUrl: "https://github.com/truongductri01/vidnote-fullstack",
        webpage: "https://salvavidasvzla.org/",
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
            position: "Software Engineering Intern - Search team",
            location: "Mountain View, CA",
            time: "Jun 2023 - Sep 2023",
            desc: [
                "Reduced over 2 million database requests with an implementation of alternative searching service using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>GraphQL</strong>",
                "Utilized <strong>Spring Boot</strong>, <strong>Docker</strong>, and <strong>Elastic Search</strong> to establish a search plugin sample version for managers and designers to evaluate services parity and consolidate them into one, aiming to save $1.5 million in maintenance costs",
                "Compiled feedback from more than 200 customers, delivering valuable insights to the Product Design team",
                "Strengthened code quality by introducing over 20 Unit tests, minimizing bugs during feature development",
            ],
        },
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
