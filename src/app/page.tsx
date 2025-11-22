import type { Metadata } from "next";
import Link from "next/link";
import {
  SiEslint,
  SiGithub,
  SiNextdotjs,
  SiPrettier,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  description:
    "A boilerplate for creating NextJS projects with TypeScript and Tailwind.",
};

const icons = [
  {
    icon: SiNextdotjs,
    label: "NextJS",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind",
  },
  {
    icon: SiPrettier,
    label: "Tailwind",
  },
  {
    icon: SiEslint,
    label: "Tailwind",
  },
  {
    icon: VscVscode,
    label: "VS Code",
  },
];

/**
 * Home page component displaying project overview and features
 * @returns Home page with carousel, features list, and installation instructions
 */
const Home = () => {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-16">
        <div className="w-50% mx-auto flex flex-col items-center gap-4 text-center text-lg sm:flex-row md:text-2xl">
          A boilerplate for creating front-end projects with NextJS, TypeScript,
          and Tailwind. Includes built-in linting and formatting with ESLint and
          Prettier as well as a theme switcher for dark and light modes.
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[200px] md:max-w-lg"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {icons.map((icon, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 md:aspect-square">
                      <icon.icon size="80" role="img" aria-label={icon.label} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <h2 className="text-2xl font-bold">Features:</h2>
        <ul className="list-disc text-lg">
          <li>ESLint config and rules</li>
          <li>Prettier configuration setup for Tailwind</li>
          <li>
            Icons from{" "}
            <a
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              React Icons
            </a>
          </li>
          <li>ShadCN/UI for theming and component library</li>
          <li>Built-in light and dark themes</li>
          <li>Node version file</li>
          <li>Custom 404 page</li>
          <li>Robots and Sitemap files</li>
          <li>VS Code settings and recommended extensions</li>
        </ul>

        <section className="h-16" />
        <h2 className="text-2xl font-bold">Installation:</h2>
        <ul className="list-disc text-lg">
          <li>
            Clone the repoisitory and replace my-new-project with your project
            name git clone
            <blockquote>
              <code>
                git@github.com:bill742/nextjs-boilerplate.git my-new-project
              </code>
            </blockquote>
          </li>

          <li>
            Create an .env file by making a copy of the .env.example file. Here
            you can add values for your site url and site name.
          </li>

          <li>
            Install dependencies using npm or your preferred package manager.
            <code>npm install</code>
          </li>

          <li>Open a local development server npm run dev</li>
        </ul>

        <Button
          asChild
          variant="secondary"
          size="lg"
          className="pb-6 pt-6 font-bold"
        >
          <Link
            href="https://github.com/bill742/nextjs-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-6 w-6" />
            View on Github
          </Link>
        </Button>
      </main>
    </div>
  );
};

Home.displayName = "Home";

export default Home;
