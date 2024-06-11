import ContactBanner from '@/components/contact';
import { PublicFooter, PublicHeader } from '@/components/layouts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen mx-auto sm:px-12">
      <div className="container relative min-h-screen bg-muted/50 text-foreground">
        <div className="max-w-2xl mx-auto">
          <PublicHeader />
          <Link href="/" className="flex pt-8 gap-x-4">
            <Avatar className='w-12 h-12'>
              <AvatarImage src="https://github.com/htmujahid.png" alt="@htmujahid" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">Talha Mujahid</h1>
              <p className="text-sm">March 6, 2000</p>
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
