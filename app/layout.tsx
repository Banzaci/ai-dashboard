import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import PageWrapperProviders from "./PageWrapperProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://laughinggoatghana.com"),
  title: "Dashboard",
  description:
    "Beachfront lodge in Busua, Ghana. Stay close to the ocean, surfing, and local fishing village life on beautiful Busua Beach.",
  openGraph: {
    title: "Dashboard",
    description:
      "Relax at Laughing Goat Lodge in Busua, Ghana. A laid-back beach lodge near the ocean, surfing, and vibrant local culture.",
    url: "https://laughinggoatghana.com",
    siteName: "Laughing Goat Lodge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Laughing Goat Lodge at Busua Beach, Ghana"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapperProviders>
      <main>
        {children}
      </main>
      <Toaster position="top-right" />
    </PageWrapperProviders>
  );
}
