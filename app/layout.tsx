import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zorrah.com"),
  title: "Zorrah Restaurant & Lounge | Menu",
  description:
    "Explore the food, Afro Fusion dishes, cocktails, wines and drinks menu at Zorrah Restaurant & Lounge.",
  keywords: [
    "Zorrah",
    "Restaurant",
    "Lounge",
    "Menu",
    "Lagos",
    "Afro Fusion",
    "African Luxury",
    "Cocktails",
    "Wines",
  ],
  authors: [{ name: "Zorrah Restaurant & Lounge" }],
  openGraph: {
    title: "Zorrah Restaurant & Lounge | Menu",
    description:
      "Explore the food, Afro Fusion dishes, cocktails, wines and drinks menu at Zorrah Restaurant & Lounge.",
    url: "https://zorrah.com/menu",
    siteName: "Zorrah Restaurant & Lounge",
    images: [
      {
        url: "/zorrah-logo.png",
        width: 600,
        height: 600,
        alt: "Zorrah Restaurant & Lounge Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorrah Restaurant & Lounge | Menu",
    description:
      "Explore the food, Afro Fusion dishes, cocktails, wines and drinks menu at Zorrah Restaurant & Lounge.",
    images: ["/zorrah-logo.png"],
  },
  icons: {
    icon: "/zorrah-logo.png",
    apple: "/zorrah-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8F3EA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F3EA] text-[#191919] min-h-screen selection:bg-[#B5121B]/15 selection:text-[#B5121B]">
        {children}
      </body>
    </html>
  );
}
