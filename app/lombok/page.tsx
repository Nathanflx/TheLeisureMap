import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Fleet from "@/components/Fleet";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactBubble from "@/components/ContactBubble";

export default function LombokPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Packages />
      <Fleet />
      <News />
      <Contact />
      <Footer />
      <ContactBubble />
    </div>
  );
}