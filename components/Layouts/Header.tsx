"use client";

import ToggleMode from "@/components/ToggleMode";
import useClickOutside from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const NAV_ITEMS = [
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/projects",
        label: "Projects",
    },
    {
        href: "/blogs",
        label: "Blogs",
    },
    {
        href: "/timeline",
        label: "Timeline",
    },
    {
        href: "/socials",
        label: "Socials",
    },
];

export default function PublicHeader() {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    const ref = useRef(null);

    useClickOutside(ref, () => setIsMobileNavbarOpen(false));

    return (
        <div
            className="flex justify-between items-center py-4 relative"
            ref={ref}
        >
            {isMobileNavbarOpen && (
                <MobileNavbar setIsMobileNavbarOpen={setIsMobileNavbarOpen} />
            )}
            <div className="w-10">
                {isMobileNavbarOpen ? (
                    <button
                        onClick={() => setIsMobileNavbarOpen(false)}
                        className="rounded-lg bg-white/90 dark:bg-zinc-800/90 py-1.5 px-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10"
                    >
                        <CloseIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
                        <CloseIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
                    </button>
                ) : (
                    <button
                        onClick={() => setIsMobileNavbarOpen(true)}
                        className="rounded-lg bg-white/90 dark:bg-zinc-800/90 py-1.5 px-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10"
                    >
                        <HamburgerIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
                        <HamburgerIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
                    </button>
                )}
            </div>
            <div className="hidden md:block">{/* <DesktopNavbar /> */}</div>
            <div className="w-10">
                <ToggleMode />
            </div>
        </div>
    );
}

function CloseIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-auto w-6 h-6 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}

function HamburgerIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-auto w-6 h-6 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    );
}

function DesktopNavbar() {
    return (
        <nav className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-lg bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                {NAV_ITEMS.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function MobileNavbar({
    setIsMobileNavbarOpen,
}: {
    setIsMobileNavbarOpen: Function;
}) {
    const router = useRouter();

    return (
        <nav className="pointer-events-auto absolute left-0 top-11 w-full sm:w-48 pt-4">
            <ul className="flex flex-col w-full rounded-lg bg-white/90 px-3 py-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                {NAV_ITEMS.map(({ href, label }) => (
                    <li key={href}>
                        <button
                            // href={href}
                            onClick={() => {
                                router.push(href);
                                setIsMobileNavbarOpen(false);
                            }}
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
