import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ReactNode } from "react";

export const metadata = {
  title: "Imprimis – IoT Solutions",
  description: "Smart Water Management",
};

export default async function Layout({ children, params }: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <ThemeProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}