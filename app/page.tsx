import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";

export default function Home() {
  return (
    <div>
      <Header/>
      <SectionOne/>
      <Footer/>
    </div>
  );
}
