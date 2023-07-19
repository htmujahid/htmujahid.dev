import './globals.css'

export const metadata = {
  title: 'HTMujahid',
  description: 'Portfolio of HTMujahid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className='bg-white text-black dark:bg-black text-white'>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
