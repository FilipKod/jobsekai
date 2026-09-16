import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="px-12 py-3 border-b border-border flex">
      <div className="flex items-center justify-center flex-wrap gap-3">
        <div className="h-6 w-6 bg-transparent border-2 rounded-lg border-cyan-400 rotate-45"></div>
        <h1 className="text-lg font-bold uppercase font-archivo-black">
          Jobsekai
        </h1>
      </div>

      <Navigation />
    </header>
  );
}
