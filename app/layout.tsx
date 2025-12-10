import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "General Science Program (GSP)",
  description: "Empowering elementary students through STEAM-based hands-on projects and career exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
