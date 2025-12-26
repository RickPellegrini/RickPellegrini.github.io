import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FirstTransition from "./components/FirstTransition";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <HamburgerMenu />

      <HeroSection />

      <FirstTransition />

      <AboutMe />

      <Footer />
    </>
  );
}
