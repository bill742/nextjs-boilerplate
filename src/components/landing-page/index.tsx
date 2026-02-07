import About from "./about";
import Features from "./features";
import GettingStarted from "./getting-started";
import Stack from "./stack";

/**
 * Default home page component displaying project features and installation instructions
 * @returns Home page with technology carousel, features list, and GitHub link
 */
const LandingPage = () => {
  return (
    <>
      <About />

      <Stack />

      <Features />

      <GettingStarted />
    </>
  );
};

LandingPage.displayName = "LandingPage  ";

export default LandingPage;
