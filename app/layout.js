import './globals.css';

import { Providers } from './providers';

export const metadata = {
  title: 'Nouns Cats',
  description: 'Lorem ipsum dolor sit amet'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
