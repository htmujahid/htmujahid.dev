import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

const projectsList = [
  {
    name: 'SonnetJS',
    description:
      'An opinionated framework for writing clean and organized JavaScript code.',
    url: 'https://sonnet.js.org/',
    technologies: ['Vanilla', 'JS', 'Frontend', 'Framework'],
  },
  {
    name: 'KHALQ Foundation Pakistan',
    description:
      'A non profit charity organization website, and an admin panel to manage the records of the organization.',
    url: 'https://khalqfoundation.org/',
    technologies: ['PHP', 'Blade', 'Laravel PHP', 'MySQL'],
  },
  {
    name: 'Cleanough',
    description:
      'A code-sharing social app where developers collaborate, receive feedback, and improve their code together.',
    url: 'https://github.com/cleanough/cleanough',
    technologies: ['TypeScript', 'Next JS', 'Node JS', 'Mongo DB', 'Vercel'],
  },
  {
    name: 'DealShare',
    description:
      'A web-based application, specifically designed on the principle of Business-to-business marketing.',
    url: 'https://deal-share.vercel.app/',
    technologies: [
      'JavaScript',
      'Next JS',
      'NextAuth',
      'MongoDB',
      'Vercel',
      'Express JS',
      'Stripe',
    ],
  },
  {
    name: 'Taskage',
    description:
      'All in one task management and scheduling solution. It keeps track of your different activities.',
    url: 'https://taskage.vercel.app/',
    technologies: ['JavaScript', 'Next JS', 'MongoDB', 'Vercel'],
  },
  {
    name: 'AdHeap',
    description:
      'An ad Agency website which allow clients to submit their ads for displaying them at different websites.',
    url: 'https://github.com/altafahmad1/AdHeap',
    technologies: ['JavaScript', 'React JS', 'Node JS', 'Express JS', 'MySQL'],
  },
  {
    name: 'Akaunting | Investor',
    description:
      'A standalone module for akaunting app for enhancing the functionality of multiple investors in one business.',
    url: 'https://akaunting.com/',
    technologies: ['PHP', 'Blade', 'VueJS', 'Laravel PHP', 'MySQL'],
  },
  {
    name: 'ShuttleSpy',
    description:
      'An android app for tracking the shuttle service, connect passengers and drivers remotely.',
    url: 'https://github.com/htmujahid/ShuttleSpy',
    technologies: [
      'Java',
      'Android Studio',
      'Firebase',
      'Google Maps API',
      'XML',
    ],
  },
  {
    name: 'Cholab',
    description:
      'A website and desktop application for providing the accurate physical and chemical properties of chemistry elements.',
    url: 'https://github.com/htmujahid/cholab-desktop',
    technologies: ['Python', 'Tkinter', 'Flask', 'HTML', 'CSS'],
  },
];

export default function Projects({ limit }: { limit?: number }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        {limit && (
          <Link href="/projects">
            <ArrowRight />
          </Link>
        )}
      </div>
      <div className="pt-4 space-y-4">
        {projectsList
          .slice(0, limit ?? projectsList.length)
          .map((project, index) => (
            <Project project={project} key={index} />
          ))}
      </div>
    </div>
  );
}

export function Project({ project }: { project: (typeof projectsList)[0] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-cente">
          <CardTitle>{project.name}</CardTitle>
          <a href={project.url} target="_blank">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
