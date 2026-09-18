import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neighborhood Listing Platform",
  description: "Local listings, neighborhood sponsors, and voice help.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
