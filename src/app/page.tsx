import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogosBand } from "@/components/sections/LogosBand";
import { StatsBand } from "@/components/sections/StatsBand";
import { Features } from "@/components/sections/Features";
import { Dashboard } from "@/components/sections/Dashboard";
import { CreatorsBrands } from "@/components/sections/CreatorsBrands";
import { Stories } from "@/components/sections/Stories";
import { Pricing } from "@/components/sections/Pricing";
import { Resources } from "@/components/sections/Resources";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Platform } from "@/components/sections/Platform";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero variant="stack" />
        <Platform />
        <LogosBand />
        <StatsBand />
        <Features />
        <Dashboard />
        <CreatorsBrands />
        <Stories />
        <Pricing />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
