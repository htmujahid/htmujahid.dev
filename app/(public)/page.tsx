import Link from 'next/link';
import Projects from '@/components/projects';
import Blogs from '@/components/blogs';
import Socials from '@/components/socials';
import Timeline from '@/components/timeline';
import TypewriterLoop from '@/components/typewriter-loop';
import { GitHubIcon, LinkedInIcon, UpworkIcon } from '@/components/icons';

export default function page() {
  return (
    <div className="">
      <div className="pt-20 track">
        <span className="">I&apos;m the</span>
        <br />
        <span className="text-2xl font-bold text-teal-500 sm:text-4xl md:text-5xl lg:text-6xl dark:text-teal-600">
          <TypewriterLoop
            texts={[
              'Software Engineer',
              'Full Stack Developer',
              'Tech Blogger',
            ]}
            speed={100}
          />
        </span>
      </div>
      <div className="max-w-xl text-foreground">
        I always try to use technology to solve complex problems and look for
        new challenges and opportunities to grow as an engineer.{' '}
        <Link href="/about" className="underline">
          See more
        </Link>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Link
          href="https://linkedin.com/in/htmujahid"
          aria-label="Follow on LinkedIn"
        >
          <LinkedInIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
        <Link href="https://github.com/htmujahid" aria-label="Follow on GitHub">
          <GitHubIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
        <Link
          href="https://upwork.com/freelancers/~01234a24882b2ee6f7"
          aria-label="Follow on Upwork"
        >
          <UpworkIcon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
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
