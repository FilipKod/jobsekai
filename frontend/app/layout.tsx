import "./globals.css";
import { Archivo_Black, Outfit } from "next/font/google";
import { cn } from "@/lib/utils";

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
        <header className="px-12 py-3 border-b border-border flex">
          <h1 className="text-lg font-bold uppercase font-archivo-black">
            Jobsekai
          </h1>

          <nav className="ml-auto">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline text-sm">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Ranks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Changelog
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="px-12 py-8">{children}</main>
      </body>
    </html>
  );
}
