import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { Header } from "@/widgets/header";
import "./globals.css";
import { SideMenuProvider } from "@/features/side-menu";
import { SideMenu } from "@/widgets/side-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "Mini Kanban board built with Next.js 16 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SideMenuProvider>
            <Header />
            <div className="relative">
              <SideMenu />
              <main className="mb-5">{children}</main>
            </div>
          </SideMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
