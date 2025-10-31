import Hero from "@/componets/pages/home/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home',
  }
   

export default function Home() {
    return (
        <>
            <Hero />
        </>
    )
}
