import Hero from "@/componets/pages/home/hero"
import ServiceSection from "@/componets/pages/home/serviceSection"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home',
  }
   

export default function Home() {
    return (
        <>
            <Hero />
            <ServiceSection />
        </>
    )
}
