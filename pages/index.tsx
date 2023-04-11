import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import SectionHero from "@/components/SectionHero";
import SectionAbout from "@/components/SectionAbout";
import SectionProjects from "@/components/SectionProjects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <SectionHero />
          <SectionAbout />
          <SectionProjects />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
