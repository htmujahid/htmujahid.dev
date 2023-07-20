import Link from "next/link";
import { BirthIcon, EducationIcon, WorkIcon } from "./Icons";

const timelineList = [
    {
        title: "Full Stack Developer at Invogue Solutions",
        description: [
            "Developed SAAS applications on principle of multitenancy",
            "Optimized the database structure for faster queries",
            "Implemented the role and permission base authorization",
            "Introduced the best practices of clean code",
        ],
        duration: {
            start: "March 2022",
            end: "Present",
        },
        tags: ["Laravel", "Vue JS", "Inertia JS", "MySQL"],
        icon: <WorkIcon />,
    },
    {
        title: "Front End Developer at Civica (Intern)",
        description: [
            "Implemented frontend of enterprise level ecommerce plus real estate application from scratch",
            "Used redux js for app wide state management",
            "Developed using Tailwind CSS as css framework",
        ],
        duration: {
            start: "September 2022",
            end: "January 2023",
        },
        tags: ["React JS", "Next JS"],
        icon: <WorkIcon />,
    },
    {
        title: "Bachelor in Software Engineering from NUST",
        duration: {
            start: "2019",
            end: "2023",
        },
        icon: <EducationIcon />,
    },
    {
        title: "Inter in Computer Science from PGC",
        duration: {
            start: "2017",
            end: "2019",
        },
        icon: <EducationIcon />,
    },
    {
        title: "Born at Lahore, Pakistan",
        duration: {
            start: "March 6, 2000",
        },
        icon: <BirthIcon />,
    },
];

export default function Timeline({ limit }: { limit?: number }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Timeline</h1>
               {limit && <Link href="/timeline">
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
            <div className="grid grid-cols-1 pt-4">
                {timelineList
                    .slice(0, limit ?? timelineList.length)
                    .map((item) => (
                        <TimelineItem key={item.title} item={item} />
                    ))}
            </div>
        </div>
    );
}

function TimelineItem({ item, ...props }: { item: any }) {
    return (
        <article
            className="relative mb-2 flex flex-row gap-3 pb-6 after:absolute after:top-10 after:bottom-0 after:left-[15px] after:block after:w-[2px] after:bg-zinc-200 last:mb-0 last:pb-0 after:last:bg-transparent dark:after:bg-zinc-700 dark:after:last:bg-transparent"
            {...props}
        >
            <div className="relative">{item.icon}</div>
            <div className="w-full py-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                <div className="flex flex-col md:flex-row">
                    <h3>{item.title}</h3>
                    <div className="grow text-xs md:ml-auto md:text-right md:text-sm">
                        <span>
                            {item.duration.start}
                            {item.duration.end && (
                                <>&nbsp;&mdash;&nbsp;{item.duration.end}</>
                            )}
                        </span>
                    </div>
                </div>

                {Array.isArray(item.tags) && item.tags.length && (
                    <div className="mt-2 flex flex-row gap-3 flex-wrap">
                        {item.tags.map((tag: string, i: number) => (
                            <Tag key={`project-tag-${i}`}>{tag}</Tag>
                        ))}
                    </div>
                )}

                {Array.isArray(item.tags) && item.tags.length && (
                    <ul className="list-disc pl-5 pt-2">
                        {item.description.map(
                            (desc: string, descIndex: number) => (
                                <li key={descIndex}>{desc}</li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </article>
    );
}

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs text-zinc-700 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-800">
            {children}
        </span>
    );
}
