import Navbar from "@/components/PT/Navbar";
import SectionHero from "@/components/PT/SectionHero";
import SectionAbout from "@/components/PT/SectionAbout";
import SectionProjects from "@/components/PT/SectionProjects";
import Footer from "@/components/PT/Footer";
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
