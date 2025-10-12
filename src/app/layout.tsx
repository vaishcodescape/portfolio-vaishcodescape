import "./globals.css";
import { LayoutProvider } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { person } from "@/resources";
import { Header } from "@/components/Header";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing work as a ${person.role}`,
    metadataBase: new URL(baseURL),
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en" className="dark">
      <LayoutProvider>
        <body className="antialiased bg-neutral-950 text-neutral-100 min-h-screen">
          <Header />
          {children}
        </body>
      </LayoutProvider>
    </html>
  );
}

