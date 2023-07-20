import Link from "next/link";

const projectsList = [
    {
        name: "KHALQ Foundation Pakistan",
        description:
            "A non profit charity organization website, and an admin panel to manage the records of the organization.",
        url: "https://khalqfoundation.org/",
        technologies: ["PHP", "Blade", "Laravel PHP", "MySQL"],
    },
    {
        name: "DealShare",
        description:
            "A web-based application, specifically designed on the principle of Business-to-business marketing.",
        url: "https://deal-share.vercel.app/",
        technologies: ["JavaScript", "Next JS", "NextAuth", "MongoDB", "Vercel", "Express JS", "Stripe"],
    },
    {
        name: "Taskage",
        description:
            "All in one task management and scheduling solution. It keeps track of your different activities.",
        url: "https://taskage.vercel.app/",
        technologies: ["JavaScript", "Next JS", "MongoDB", "Vercel"],
    },
    {
        name: "AdHeap",
        description:
            "An ad Agency website which allow clients to submit their ads for displaying them at different websites.",
        url: "https://github.com/altafahmad1/AdHeap",
        technologies: [
            "JavaScript",
            "React JS",
            "Node JS",
            "Express JS",
            "MySQL",
        ],
    },
    {
        name: "Cleanough",
        description: "A code-sharing social app where developers collaborate, receive feedback, and improve their code together.",
        url: "https://cleanough.com/",
        technologies: ["TypeScript", "Next JS", "Node JS", "Mongo DB", "Vercel"],
    },
    {
        name: "Akaunting | Investor",
        description:
            "A standalone module for akaunting app for enhancing the functionality of multiple investors in one business.",
        url: "https://akaunting.com/",
        technologies: ["PHP", "Blade", "VueJS", "Laravel PHP", "MySQL"],
    },
    {
        name: "ShuttleSpy",
        description:
            "An android app for tracking the shuttle service, connect passengers and drivers remotely.",
        url: "https://github.com/htmujahid/ShuttleSpy",
        technologies: [
            "Java",
            "Android Studio",
            "Firebase",
            "Google Maps API",
            "XML",
        ],
    },
    {
        name: "Cholab",
        description:
            "A website and desktop application for providing the accurate physical and chemical properties of chemistry elements.",
        url: "https://github.com/htmujahid/cholab-desktop",
        technologies: ["Python", "Tkinter", "Flask", "HTML", "CSS"],
    },
];

export default function Projects({ limit }: { limit?: number }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Projects</h1>
                {limit && <Link href="/projects">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                </Link>}
            </div>
            <div className="space-y-4 pt-4">
                {projectsList
                    .slice(0, limit ?? projectsList.length)
                    .map((project, index) => (
                        <Project project={project} key={index} />
                    ))}
            </div>
        </div>
    );
}

export function Project({ project }: { project: (typeof projectsList)[0] }) {
    return (
        <div>
            <div className="flex flex-col md:flex-row border border-zinc-300 dark:border-zinc-700 rounded-lg p-4 bg-zinc-200 dark:bg-zinc-800">
                <div className="">
                    <div className="flex justify-between items-cente">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <a href={project.url} target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap pt-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                className="text-xs text-zinc-200 bg-gray-500 dark:bg-gray-500 rounded-full px-2 py-1 mr-2 mb-2"
                                key={index}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
