import { Download } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function ContactBanner() {
  return (
    <div className="pt-20 xl:h-[350px]">
      <div className="left-0 right-0 xl:absolute">
        <Card className="w-full max-w-4xl px-6 mx-auto text-center md:px-12 md:py-4 sm:space-y-1.5 md:text-left">
          <CardHeader>
            <CardTitle className="text-3xl/[150%] font-bold text-center">
              Contact me
            </CardTitle>
            <CardDescription className="my-2 text-center">
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out to me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button>
                  <span>Download Resume</span>{' '}
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a
                href="mailto:htmujahid@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost">Hit me an email</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
