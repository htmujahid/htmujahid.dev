import ContactBanner from "@/components/Contact";
import { PublicFooter, PublicHeader } from "@/components/Layouts";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto min-h-screen">
            <div className="bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white container relative min-h-screen">
                <div className="px-4 sm:px-0 max-w-xl mx-auto">
                    <PublicHeader />
                    <Link href="/" className="flex gap-x-4 pt-8">
                        <Image
                            src="/logo.png"
                            alt="Picture of the author"
                            className="rounded-full border border-zinc-300 dark:border-zinc-700"
                            width={50}
                            height={50}
                        />
                        <div>
                            <h1 className="font-bold">Talha Mujahid</h1>
                            <p className="text-sm">
                                March 6, 2000
                            </p>
                        </div>
                    </Link>
                    {children}
                    <ContactBanner />
                    <PublicFooter />
                </div>
            </div>
        </div>
    );
}
