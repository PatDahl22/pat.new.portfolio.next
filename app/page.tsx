"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CardHoverEffect from "@/components/CardHoverEffect";
import { FooterSection } from "@/components/FooterSection";
import HomeExperience from "@/components/HomeExperience";
import Grid from "@/components/Grid";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full px-20">
      <ShootingStars />
      <StarsBackground />
      
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <CardHoverEffect />
        <Approach />
        <Clients />
        <HomeExperience />
        <FooterSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
