import Link from "next/link";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, MediumIcon, RedditIcon, StackOverflowIcon, TwitterIcon, UpworkIcon } from "./Icons";

const socialsList = [
    {
        name: "GitHub",
        url: "https://www.github.com/",
        username: "htmujahid",
        icon: (
            <GitHubIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/",
        username: "htmujahid",
        icon: (
            <LinkedInIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/",
        username: "~01234a24882b2ee6f7",
        icon: (
            <UpworkIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "GMail",
        url: "mailto:",
        username: "htmujahid@gmail.com",
        icon: (
            <MailIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "Twitter",
        url: "https://www.twitter.com/",
        username: "htmujahid",
        icon: (
            <TwitterIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "StackOverflow",
        url: "https://www.stackoverflow.com/",
        username: "htmujahid",
        icon: (
            <StackOverflowIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "Medium",
        url: "https://www.medium.com/",
        username: "@htmujahid",
        icon: (
            <MediumIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "Reddit",
        url: "https://www.reddit.com/user/",
        username: "htmujahid",
        icon: (
            <RedditIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/",
        username: "htmujahid",
        icon: (
            <FacebookIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        username: "htmujahid",
        icon: (
            <InstagramIcon className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        ),
    },
];

export default function Socials({ limit }: { limit?: number }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Socials</h1>
                {limit && <Link href="/socials">
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-4">
                {socialsList
                    .slice(0, limit ?? socialsList.length)
                    .map((social) => (
                        <Social
                            key={social.name}
                            name={social.name}
                            url={social.url}
                            username={social.username}
                            icon={social.icon}
                        />
                    ))}
            </div>
        </div>
    );
}

export function Social({
    name,
    url,
    username,
    icon,
}: {
    name: string;
    url: string;
    username: string;
    icon: JSX.Element;
}) {
    return (
        <a href={url + username} target="_blank">
            <div className="flex items-center gap-x-4 hover:underline text-sm">
                <div>{icon}</div>
                <div className="flex flex-col">
                    <span>{name}</span>
                    <span>
                        {username.includes("@") ? "" : "@"}
                        {username}
                    </span>
                </div>
            </div>
        </a>
    );
}
