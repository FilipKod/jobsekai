import { buttonVariants } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="ml-auto">
      <ul className="flex items-center space-x-4">
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
        <li>
          <a
            href="#"
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            Start free
          </a>
        </li>
      </ul>
    </nav>
  );
}
