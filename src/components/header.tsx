import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6">
      <h1 className="text-3xl font-bold">
        {process.env.NEXT_PUBLIC_SITE_NAME}
      </h1>
      <ModeToggle />
    </header>
  );
}
