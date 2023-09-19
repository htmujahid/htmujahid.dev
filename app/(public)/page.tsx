import Link from "next/link";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Socials from "@/components/Socials";
import Timeline from "@/components/Timeline";
import TypewriterLoop from "@/components/TypewriterLoop";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "@/components/Icons";

export default function page() {
    return (
        <div className="">
            <div className="pt-20 track">
                <span className="">I&apos;m the</span>
                <br />
                <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-500 dark:text-teal-600">
                    <TypewriterLoop
                        texts={[
                            "Software Engineer",
                            "Full Stack Developer",
                            "Tech Blogger",
                        ]}
                        speed={100}
                    />
                </span>
            </div>
            <div className="max-w-xl text-base text-zinc-700 dark:text-zinc-300">
                I always try to use technology to solve complex problems and
                look for new challenges and opportunities to grow as an
                engineer. <Link href="/about" className="underline">See more</Link>
            </div>
            <div className="mt-6 flex gap-3 items-center">
                <Link
                    href="https://linkedin.com/in/htmujahid"
                    aria-label="Follow on LinkedIn"
                >
                    <LinkedInIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                </Link>
                <Link
                    href="https://github.com/htmujahid"
                    aria-label="Follow on GitHub"
                >
                    <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                </Link>
                <Link
                    href="https://upwork.com/freelancers/~01234a24882b2ee6f7"
                    aria-label="Follow on Upwork"
                >
                    <UpworkIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                </Link>
            </div>
            <div className="pt-20">
                <Projects limit={4} />
            </div>
            <div className="pt-20">
                <Timeline limit={6} />
            </div>
            <div className="pt-20">
                <Socials limit={6} />
            </div>
            <div className="pt-20">
                <Blogs limit={3} />
            </div>
        </div>
    );
}
