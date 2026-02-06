"use client";

import { scrollToSection } from "@/lib/utils";

const quickLinkItems = [
  { href: "#about", id: 1, label: "About" },
  { href: "#stack", id: 2, label: "Tech Stack" },
  { href: "#features", id: 3, label: "Features" },
  { href: "#getting-started", id: 4, label: "Getting Started" },
];

const QuickLinks = () => {
  return (
    <ul className="space-y-2 text-sm">
      {quickLinkItems.map((link) => (
        <li key={link.id}>
          <button
            type="button"
            onClick={() => scrollToSection(link.href.substring(1))}
            className="text-stone-600 transition-colors hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-400"
            aria-label={link.label}
          >
            {link.label}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </button>
        </li>
      ))}
    </ul>
  );
};

QuickLinks.displayName = "QuickLinks";

export default QuickLinks;
