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

// Change this to your custom domain if you add one — it is what turns the
// share image and icons into absolute URLs.
const SITE = "https://portfolio-rouge-delta-27.vercel.app";

const description =
  "Computer science undergraduate at MIT Bengaluru. Model evaluation for frontier AI labs, structural modelling of technology governance at IIT Delhi, and applied quantitative tooling.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Aryamaan Upadhyay",
  description,
  keywords: [
    "Aryamaan Upadhyay",
    "AI evaluation",
    "Interpretive Structural Modelling",
    "MICMAC",
    "deepfake governance",
    "MIT Bengaluru",
  ],
  authors: [{ name: "Aryamaan Upadhyay" }],
  openGraph: {
    type: "profile",
    siteName: "Aryamaan Upadhyay",
    title: "Aryamaan Upadhyay",
    description,
    url: SITE,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryamaan Upadhyay",
    description,
  },
};

export const viewport = {
  themeColor: "#100E0C",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
