import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imam Getsiev | Professional Grappling & Wrestling Coach",
  description:
    "Premium athlete and coaching profile for Imam Getsiev, a professional grappling, wrestling and Brazilian Jiu-Jitsu coach based in Sharjah, UAE.",
  keywords: [
    "Imam Getsiev",
    "Grappling Coach UAE",
    "Wrestling Coach Sharjah",
    "Brazilian Jiu-Jitsu Coach",
    "BJJ Purple Belt",
    "AJP Champion",
    "Combat Sports Coach"
  ],
  authors: [{ name: "Imam Getsiev" }],
  creator: "Imam Getsiev",
  openGraph: {
    title: "Imam Getsiev | Professional Grappling & Wrestling Coach",
    description:
      "World Champion, Asian Champion and Purple Belt in Brazilian Jiu-Jitsu. Based in Sharjah, UAE and available for international coaching opportunities.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/imam-hero.jpg",
        width: 1200,
        height: 1600,
        alt: "Imam Getsiev in Brazilian Jiu-Jitsu gi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Imam Getsiev | Professional Grappling & Wrestling Coach",
    description:
      "World Champion, Asian Champion and Purple Belt in Brazilian Jiu-Jitsu based in Sharjah, UAE.",
    images: ["/images/imam-hero.jpg"]
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
