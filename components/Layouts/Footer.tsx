import Link from 'next/link';

const NAV_ITEMS = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/blogs',
    label: 'Blogs',
  },
  {
    href: '/timeline',
    label: 'Timeline',
  },
  {
    href: '/socials',
    label: 'Socials',
  },
];

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="py-12 border-t border-zinc-300/40 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex flex-wrap justify-center text-sm font-medium gap-x-6 gap-y-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="transition hover:text-teal-500 dark:hover:text-teal-400">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} HTMujahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
