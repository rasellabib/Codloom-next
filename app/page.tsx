import { Metadata } from "next";
import AllInOne from "@/componets/pages/home/allInOne";
import "./globals.css";
// import Navbar from "@/componets/pages/home/navBar";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
 
      <AllInOne />
    </>
  );
}
