import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Community } from "@/components/sections/Community";
import { Events } from "@/components/sections/Events";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { ImpactAreas } from "@/components/sections/ImpactAreas";
import { Method } from "@/components/sections/Method";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImpactAreas />
        <Method />
        <Services />
        <Events />
        <Testimonials />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
