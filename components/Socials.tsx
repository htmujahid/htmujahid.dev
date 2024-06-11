import Link from 'next/link';
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MediumIcon,
  RedditIcon,
  StackOverflowIcon,
  TwitterIcon,
  UpworkIcon,
} from './icons';
import { ArrowRight } from 'lucide-react';

const socialsList = [
  {
    name: 'GitHub',
    url: 'https://www.github.com/',
    username: 'htmujahid',
    icon: (
      <GitHubIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/',
    username: 'htmujahid',
    icon: (
      <LinkedInIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/',
    username: '~01234a24882b2ee6f7',
    icon: (
      <UpworkIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'GMail',
    url: 'mailto:',
    username: 'htmujahid@gmail.com',
    icon: (
      <MailIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/',
    username: 'htmujahid',
    icon: (
      <TwitterIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'StackOverflow',
    url: 'https://www.stackoverflow.com/',
    username: 'htmujahid',
    icon: (
      <StackOverflowIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'Medium',
    url: 'https://www.medium.com/',
    username: '@htmujahid',
    icon: (
      <MediumIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/',
    username: 'htmujahid',
    icon: (
      <RedditIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    username: 'htmujahid',
    icon: (
      <FacebookIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    username: 'htmujahid',
    icon: (
      <InstagramIcon className="w-10 h-10 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    ),
  },
];

export default function Socials({ limit }: { limit?: number }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Socials</h1>
        {limit && (
          <Link href="/socials">
            <ArrowRight />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
        {socialsList.slice(0, limit ?? socialsList.length).map((social) => (
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
      <div className="flex items-center text-sm gap-x-4 hover:underline">
        <div>{icon}</div>
        <div className="flex flex-col">
          <span>{name}</span>
          <span>
            {username.includes('@') ? '' : '@'}
            {username}
          </span>
        </div>
      </div>
    </a>
  );
}
