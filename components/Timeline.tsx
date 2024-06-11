import Link from 'next/link';
import { Badge } from './ui/badge';
import { ArrowRight, BriefcaseBusiness, Cake, GraduationCap } from 'lucide-react';

const timelineList = [
  {
    title: 'Full Stack Developer at Invogue Solutions',
    description: [
      'Developed SAAS applications on principle of multitenancy',
      'Optimized the database structure for faster queries',
      'Implemented the role and permission base authorization',
      'Introduced the best practices of clean code',
    ],
    duration: {
      start: 'March 2022',
      end: 'Present',
    },
    tags: ['Laravel', 'Vue JS', 'Inertia JS', 'MySQL'],
    icon: <BriefcaseBusiness className="w-4 h-4" />,
  },
  {
    title: 'Front End Developer at Civica (Intern)',
    description: [
      'Implemented frontend of enterprise level ecommerce plus real estate application from scratch',
      'Used redux js for app wide state management',
      'Developed using Tailwind CSS as css framework',
    ],
    duration: {
      start: 'September 2022',
      end: 'January 2023',
    },
    tags: ['React JS', 'Next JS'],
    icon: <BriefcaseBusiness className="w-4 h-4" />,
  },
  {
    title: 'Bachelor in Software Engineering from NUST',
    duration: {
      start: '2019',
      end: '2023',
    },
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    title: 'Inter in Computer Science from PGC',
    duration: {
      start: '2017',
      end: '2019',
    },
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    title: 'Born at Lahore, Pakistan',
    duration: {
      start: 'March 6, 2000',
    },
    icon: <Cake className="w-4 h-4" />,
  },
];

export default function Timeline({ limit }: { limit?: number }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Timeline</h1>
        {limit && (
          <Link href="/timeline">
            <ArrowRight className="w-6 h-6" />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 pt-4">
        {timelineList.slice(0, limit ?? timelineList.length).map((item) => (
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
      <div className="relative">
        <div className='p-2 rounded-full bg-background'>{item.icon}</div>
      </div>
      <div className="w-full py-1.5 text-sm ">
        <div className="flex flex-col md:flex-row">
          <h3>{item.title}</h3>
          <div className="text-xs grow md:ml-auto md:text-right md:text-sm">
            <span>
              {item.duration.start}
              {item.duration.end && <>&nbsp;&mdash;&nbsp;{item.duration.end}</>}
            </span>
          </div>
        </div>

        {Array.isArray(item.tags) && item.tags.length && (
          <div className="flex flex-row flex-wrap gap-3 mt-2">
            {item.tags.map((tag: string, i: number) => (
              <Badge variant="secondary" key={`project-tag-${i}`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {Array.isArray(item.tags) && item.tags.length && (
          <ul className="pt-2 pl-5 list-disc">
            {item.description.map((desc: string, descIndex: number) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
