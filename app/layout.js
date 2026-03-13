import './globals.css';

export const metadata = {
  title: 'Astha Parajuli | Personal Yoga Trainer',
  description: 'Book a session with Astha Parajuli for personal yoga and meditation coaching programs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
