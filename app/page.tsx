"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main
      className="relative bg-black flex justify-center
    items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden 
       overflow-y-hidden"
    >
      <div className="w-full max-w-full h-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
