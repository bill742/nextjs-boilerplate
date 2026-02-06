import FeatureItem from "./feature-item";

const Features = () => {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32" id="features">
        <div className="space-y-8">
          <h2 className="text-center font-serif text-3xl font-bold text-stone-900 dark:text-stone-50 md:text-4xl">
            Features
          </h2>
          <ul className="grid gap-4 text-stone-600 dark:text-stone-300 md:grid-cols-2 md:gap-6">
            <FeatureItem content="ESLint config and rules" />
            <FeatureItem content="Prettier configuration setup for Tailwind" />
            <FeatureItem
              content="Icons from "
              link="https://react-icons.github.io/react-icons/"
              linkText="React Icons"
            />
            <FeatureItem content="ShadCN/UI for theming and component library" />
            <FeatureItem content="Built-in light and dark themes" />
            <FeatureItem content="Node version file" />
            <FeatureItem content="Custom 404 page" />
            <FeatureItem content="Robots and Sitemap files" />
            <FeatureItem content="VS Code settings and recommended extensions" />
          </ul>
        </div>
      </section>
      <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-stone-200 to-transparent dark:via-stone-800" />
    </>
  );
};

Features.displayName = "Features";

export default Features;
