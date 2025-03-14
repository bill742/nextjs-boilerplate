import type { Metadata } from "next";
import {
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://nextjs-boilerplate-three-iota-34.vercel.app/",
  },
  description:
    "A boilerplate for creating NextJS projects with TypeScript and Tailwind.",
};

export default function Home() {
  [1, 2, 3].map((num) => {
    return num * 2;
  });

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-16 sm:items-start">
        <h1 className="mx-auto text-center text-4xl">NextJS Boilerplate</h1>
        <div className="mx-auto flex flex-row items-center gap-4">
          <SiNextdotjs className="h-20 w-20" />{" "}
          <SiTailwindcss className="h-20 w-20" />{" "}
          <SiTypescript className="h-20 w-20" />
        </div>
        <div className="w-50% mx-auto flex flex-col items-center gap-4 text-center text-2xl sm:flex-row">
          A boilerplate for creating front-end projects with NextJS, TypeScript,
          and Tailwind. Includes built-in linting and formatting with ESLint and
          Prettier.
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/bill742/nextjs-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
          View on Github
        </a>
      </footer>
    </div>
  );
}
