import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// --- Professional SEO Metadata ---
export const metadata: Metadata = {
  title: {
    default: "Cristina Ochoa | Author & Storyteller",
    template: "%s | Cristina Ochoa", // This automatically adds the page name!
  },
  description: "Official website of author Cristina Ochoa. A quaint and refreshing digital sanctuary for readers and dreamers.",
  keywords: ["Author", "Cristina Ochoa", "Books", "Historical Fiction", "Moodboard", "Storytelling"],
  authors: [{ name: "Cristina Ochoa" }],
  creator: "Cristina Ochoa",
  // This is what shows up when you share on Twitter/iMessage
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cristinaochoa.com",
    siteName: "Cristina Ochoa",
    title: "Cristina Ochoa | Author & Storyteller",
    description: "A quaint and refreshing digital sanctuary for readers.",
    images: [
      {
        url: "/og-image.jpg", // You can add a nice preview image later!
        width: 1200,
        height: 630,
        alt: "Cristina Ochoa Author Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristina Ochoa | Author",
    description: "A digital sanctuary for readers.",
    creator: "@cristinaochoa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
} ) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        'antialiased' makes your book-like fonts look much smoother.
        'selection:bg-periwinkle/30' changes the highlight color when you select text!
      */}
      <body className="antialiased selection:bg-periwinkle/30 bg-cream dark:bg-black transition-colors duration-500">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* 
              This 'main' wrapper ensures your content always stays 
              centered and has a consistent max-width.
            */}
            <main className="flex-grow">
              {children}
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
