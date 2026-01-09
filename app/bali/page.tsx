import Header from "@/components/HeaderBali";
import HeroBali from "@/components/HeroBali";
import PackagesBali from "@/components/PackagesBali";
import FleetBali from "@/components/FleetBali";
import NewsBali from "@/components/NewsBali";
import ContactBali from "@/components/ContactBali";
import Footer from "@/components/Footer";
import ContactBubble from "@/components/ContactBubble";

export default function BaliPage() {
  return (
    <div>
      <Header />
      <HeroBali />
      <PackagesBali />
      <FleetBali />
      <NewsBali />
      <ContactBali />
      <Footer />
      <ContactBubble />
    </div>
  );
}