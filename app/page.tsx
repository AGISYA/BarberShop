import AboutUs from "@/components/organsems/aboutus";
import CallToAction from "@/components/organsems/calltoaction";
import Footer from "@/components/organsems/footer";
import Hero from "@/components/organsems/hero";
import Navbar from "@/components/organsems/navbar";
import OurBarber from "@/components/organsems/ourbarber";
import Pricing from "@/components/organsems/pricing";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="call-to-action">
        <CallToAction />
      </section>
      {/* <Features /> */}
      <section id="pricing">
        <Pricing />
      </section>
      <section id="our-barber">
        <OurBarber />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <Footer />
    </div>
  );
}
