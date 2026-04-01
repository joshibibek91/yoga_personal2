import "./globals.css";
import { Montserrat, Nunito_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Astha Parajuli | Personal Yoga Trainer",
  description:
    "Book a session with Astha Parajuli for personal yoga and meditation coaching programs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${nunitoSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
