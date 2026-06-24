import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { Events } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Method } from "@/components/sections/Method";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Method />
        <Services />
        <Events />
        <Testimonials />
        <Community />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
