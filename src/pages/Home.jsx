import { useEffect } from "react";
import Challenge from "../components/Challenge";
import CommunityCTA from "../components/CommunityCTA";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import InvolvedPreview from "../components/InvolvedPreview";
import Pathway from "../components/Pathway";
import ProgramsPreview from "../components/ProgramsPreview";
import VisionMission from "../components/VisionMission";

export default function Home() {
  useEffect(() => {
    document.title = "Turning Point Liberia | Building the Liberia we want to see";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Turning Point Liberia is a youth-led initiative creating practical pathways through skills, mentorship, opportunity and partnership."
    );
  }, []);

  return (
    <>
      <Hero />
      <Challenge />
      <VisionMission />
      <Pathway />
      <ProgramsPreview />
      <HowWeWork />
      <CommunityCTA />
      <InvolvedPreview />
    </>
  );
}
