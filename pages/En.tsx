import Navbar from "@/components/EN/Navbar";
import SectionHero from "@/components/EN/SectionHero";
import SectionAbout from "@/components/EN/SectionAbout";
import SectionProjects from "@/components/EN/SectionProjects";
import Footer from "@/components/EN/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <SectionHero />
        <SectionAbout />
        <SectionProjects />
        <Footer />
      </main>
    </>
  );
}
