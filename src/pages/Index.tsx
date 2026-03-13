import { useState } from "react";
import EnvelopeLanding from "@/components/wedding/EnvelopeLanding";
import HeroSection from "@/components/wedding/HeroSection";
import WeddingDetails from "@/components/wedding/WeddingDetails";
import EventTimeline from "@/components/wedding/EventTimeline";
import GallerySection from "@/components/wedding/GallerySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpened) {
    return <EnvelopeLanding onOpen={() => setIsOpened(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WeddingDetails />
      <EventTimeline />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
