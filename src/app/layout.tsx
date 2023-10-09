import '@/styles/globals.css';

import Footer from '@/components/ui/Footer';
import { inter, londrina } from '@/styles/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${londrina.variable}`}>
      <body className="font-inter font-semibold">
        {children}
        <Footer />
      </body>
    </html>
  );
}
