import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className="flex flex-col min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main className="grow pt-16">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
