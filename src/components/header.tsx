import ModeToggle from "./mode-toggle";

/**
 * Header component for site-wide navigation and branding
 * @returns Header component with site name and theme toggle
 */
const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <h1 className="text-3xl font-bold">
        {process.env.NEXT_PUBLIC_SITE_NAME}
      </h1>
      <ModeToggle />
    </header>
  );
};

Header.displayName = "Header";

export default Header;
