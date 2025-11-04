import { Metadata } from "next";
import AllInOne from "@/componets/pages/all-Page/allInOne";
import NavBar from "@/componets/pages/home/navBar";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <NavBar />
      <AllInOne />
    </>
  );
}
