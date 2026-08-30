import "./globals.css";
import { Newsreader, Public_Sans } from "next/font/google";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Aryamaan Upadhyay",
  description:
    "Computer science undergraduate at MIT Bengaluru. Model evaluation for frontier AI labs, structural modelling of technology governance at IIT Delhi, and applied quantitative tooling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
