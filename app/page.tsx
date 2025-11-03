
import AboutUs from "@/componets/pages/home/aboutUs";
import BgSection from "@/componets/pages/home/bgSection";
import FaqSection from "@/componets/pages/home/faq";
import FooterSection from "@/componets/pages/home/footerSection";
import Hero from "@/componets/pages/home/hero";
import Navbar from "@/componets/pages/home/navBar";
import OurWork from "@/componets/pages/home/ourWork";
import ServiceSection from "@/componets/pages/home/serviceSection";
import TestimonialSection from "@/componets/pages/home/testimonialSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <BgSection />
      <Hero />
      <ServiceSection />
      <OurWork />
      <AboutUs />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </>
  );
}
