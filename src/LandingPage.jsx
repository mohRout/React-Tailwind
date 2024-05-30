import React from "react";
import NavBarSection from "./TailwindBlocks/components/NavBarSection";
import HeroSection from "./TailwindBlocks/components/HeroSection";
import ContentSection from "./TailwindBlocks/components/ContentSection";
import GallerySection from "./TailwindBlocks/components/GallerySection";
import HoverSection from "./TailwindBlocks/components/HoverSection";
import FeatureSection from "./TailwindBlocks/components/FeatureSection";
import PricingSection from "./TailwindBlocks/components/PricingSection";
import TeamSection from "./TailwindBlocks/components/TeamSection";
import TestimonialSection from "./TailwindBlocks/components/TestimonailSection";
import ContactSection from "./TailwindBlocks/components/ContactSection";
import FooterSection from "./TailwindBlocks/components/FooterSection";


const LandingPage = ({change})=>{
    return (
        <div>
          <NavBarSection change={change}/>
          <HeroSection/>
          <ContentSection/>
          <GallerySection/>
          <HoverSection/>
          <FeatureSection/>
          <PricingSection/>
          <TeamSection/>
          <TestimonialSection/>
          <ContactSection/>
          <FooterSection/>
        </div>
    )
}

export default LandingPage