export default function ContactBanner() {
    return (
        <div className="pt-20 xl:h-[350px]">
            <div className="xl:absolute right-0 left-0 xl:mx-32">
                <section className="mx-auto w-full max-w-4xl rounded-2xl border rounded-lg p-4 bg-zinc-300 dark:bg-zinc-700 px-6 md:px-12 py-4 md:py-10 text-center text-zinc-800 border-zinc-300 dark:border-zinc-700 dark:text-zinc-200 md:text-left">
                    <h2 className="text-3xl/[150%] font-bold text-center">Contact me</h2>
                    <p className="my-2 text-center">
                        I'm always open to new opportunities and collaborations.
                        Feel free to reach out to me.
                    </p>
                    <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-12 items-center justify-center rounded-lg bg-zinc-600 px-6 text-center text-sm font-semibold ring-offset-2 text-zinc-100 dark:text-zinc-200 hover:bg-opacity-70 focus:outline-none focus:ring dark:bg-zinc-800 dark:hover:bg-opacity-70 md:inline-flex"
                        >
                            <span>
                                Download Resume
                            </span>
                            <svg
                                className="w-4 h-4 ml-2 -mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="mailto:htmujahid@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-12 items-center justify-center rounded-lg bg-transparent px-6 text-center text-sm font-semibold ring-offset-2 hover:bg-zinc-200 focus:outline-none focus:ring dark:hover:bg-zinc-600 md:inline-flex"
                        >
                            Hit me an email
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
