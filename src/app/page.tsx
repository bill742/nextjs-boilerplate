import type { Metadata } from "next";

import HomePageDefault from "@/components/home-page-default";

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  description:
    "A boilerplate for creating NextJS projects with TypeScript and Tailwind.",
};

/**
 * Home page component that conditionally renders production or development content
 * @returns Home page with environment-specific content
 */
const Home = () => {
  const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === "Production";

  if (isProduction) {
    return <HomePageDefault />;
  }

  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h2 className="text-2xl font-bold">Welcome to NextJS Boilerplate!</h2>
      <p>
        This is a boilerplate for creating NextJS projects with TypeScript and
        Tailwind.
      </p>
    </main>
  );
};

Home.displayName = "Home";

export default Home;
