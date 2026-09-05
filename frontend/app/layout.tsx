import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased bg-amber-200">
      <body className="min-h-full flex flex-col bg-amber-600">
        <header className="bg-amber-400 p-4">
          <h1 className="text-2xl font-bold">Jobsekai</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
