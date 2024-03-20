import Image from "next/image";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import Events from "@/components/Events";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
        <Navbar />
        <div className="">
            <Homepage />
            <About />
            <Events />
            <Highlights />
            <Footer />
        </div>
      </>
  );
}
