import "./globals.css";
import { Archivo_Black, Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "./components/Header";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: "400",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        "font-outfit",
        archivoBlack.variable,
        outfit.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="px-12 py-8">{children}</main>
      </body>
    </html>
  );
}
