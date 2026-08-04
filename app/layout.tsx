import "./globals.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}