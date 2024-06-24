export const NAV_LINKS = [
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Skills",
        href: "/skills"
    },
    {
        title: "Projects",
        href: "/projects"
    },
    {
        title: "Contact",
        href: "/contact"
    }
];

export const SKILLS = [
    "HTML",
    "CSS",
    "JavaScript",
    "NodeJS",
    "React",
    "NextJS",
    "TailwindCSS",
    "TypeScript",
    "Python",
    "MySql",
    "MongoDB",
    "ThreeJS",
    "Git",
    "GitHub",
    "Godot",
];

export const MY_PROJECTS = [
    {
        title: "SmileySpeak",
        description: "This project, Smiley Speak, is a personal practice project to sharpen my skills in full-stack development with Next.js and database management, including Figma which was the platform used for the design. It is not intended for public use but as a sandbox for exploring web technologies.",
        logo: "/images/smileyspeak.png",
        tags: ["NextJS", "TypeScript", "Tailwind", "MySQL"],
        colors: ["#C0C0C0", "#3178c6", "#06b6d4", "#f29111"],
        github: "https://github.com/albinhasanaj/SmileySpeak",
        images: ["smileyspeak/home.png", "smileyspeak/home_loggedin.png", "smileyspeak/settings.png", "smileyspeak/signup.png"]
    },
    {
        title: "NexTalk",
        description: 'NexTalk is a real-time chat application built with Next.js, featuring full-stack capabilities and modern web technologies. It includes real-time communication using WebSockets, robust user authentication with GitHub OAuth, and a responsive design optimized for both mobile and desktop platforms.',
        logo: "/images/nextalk.png",
        tags: ["NextJS", "TypeScript", "Tailwind", "Prisma", "MySQL", "Socket.io"],
        colors: ["#C0C0C0", "#3178c6", "#06b6d4", "#F02E65", "#f29111", "#FF5722"],
        github: "https://github.com/albinhasanaj/NexTalk",
        images: ["nextalk/home.png", "nextalk/nickname.png", "nextalk/new_chat.png", "nextalk/chatting.png", "nextalk/friend_search.png", "nextalk/github_settings.png", "nextalk/logout.png"
        ]
    },
]

export const CODE_ALONG_PROJECTS = [
    {
        title: "Horizon",
        description: "This was a code-along project from JSMastery, which taught me so much, and is one of the best projects I've worked on. It's a banking dashboard that uses uses Plaid for bank connections, Dwolla for transfers and Appwrite as backend, and it's completely type safe thanks to TypeScript. Sentry is used for error tracking.",
        logo: "/images/horizon.svg",
        tags: ["NextJS", "TypeScript", "Tailwind", "Dwolla", "Appwrite", "Sentry", "Plaid"],
        colors: ["#C0C0C0", "#3178c6", "#06b6d4", "#FF5722", "#F02E65", "#2F1937", "#25A768"],
        github: "https://github.com/albinhasanaj/banking",
        images: ["horizon/signin.png", "horizon/signup.png", "horizon/whenloggedin.png", "horizon/linkbank.png", "horizon/home.png", "horizon/mybanks.png", "horizon/transactions.png", "horizon/transfer.png",],
    },
    {
        title: "3D Shirt Customizer",
        description: "This project is a 3D shirt customizer that allows users to customize the color of the shirt, with the option to add a logo. It even features an AI model that accepts a prompt and generates a unique design for the shirt. This project was a JSMastery code along, which taught me a lot about ThreeJS and React.",
        logo: "/images/3dshirt.png",
        tags: ["React", "Tailwind", "APIs", "ThreeJS"],
        colors: ["#61DAFB", "#06b6d4", "#3DBE29", "#C0C0C0"],
        github: "https://github.com/albinhasanaj/ThreeJS_AI_Project",
        images: ["customizer/home.png", "customizer/style-1.png", "customizer/style-2.png"],

    },
]

export const ABOUT_ME = [
    [
        "I began my journey into full-stack development fueled by curiosity and inspiration from fictional tech, notably after watching the Iron Man movie. Motivated to create my own AI, I dabbled with various programming languages from an early age, starting with C++ at 14, then Python, and many more. However, it was not until early 2024 that I found my true passion in web development. What excites me most about this field is the ability to turn abstract ideas into tangible, functioning websites and applications. My ability to focus intensely allows me to code for hours on end, tackling complex logic problems with enthusiasm.",
    ],
    [
        "While I've developed a strong frontend foundation, delighting in the transformation from concept to visual interface, my true passion lies in backend development. I relish the challenges it presents, allowing me to dive deeper into the mechanics behind the scenes. My approach to staying current in this fast-evolving field includes avidly reading tech articles, watching tutorial videos, and continuously experimenting with new technologies. This proactive learning strategy not only keeps my skills sharp but also deeply enriches my understanding of both the theoretical and practical aspects of programming.",
    ],
    [
        'One of my proudest achievements is "SmileySpeak," a full-stack project where I first ventured into using MySQL over MongoDB. I took on every aspect of this project—from designing to coding—which greatly enhanced its mobile responsiveness and integrated some unique features. A significant learning moment came when I lost three days of intensive work due to a mishap with Git commands, teaching me the crucial importance of regular backups and meticulous version control. This experience not only sharpened my technical skills but also instilled a disciplined approach to project management and problem-solving.',
    ]
]

export const CERTIFICATIONS = [
    {
        imageUrl: "/images/pythoncert.png",
        heading: "Python Certification",
        issuedBy: "Certiport",
        issuedOn: "2024",
        link: "https://www.credly.com/badges/461a2b59-5cd2-4c79-a5cb-d2a341f0a576"
    },
    {
        imageUrl: "/images/javascriptcert.png",
        heading: "JavaScript Certification",
        issuedBy: "Certiport",
        issuedOn: "2024",
        link: "https://www.credly.com/badges/84a8d63d-aa4b-49ff-a1e8-5ce83f8e095e"
    }
];