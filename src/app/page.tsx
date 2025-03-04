import Image from "next/image";
import Herosection from "./component/Herosection";
import Navbar from "./component/Navbar";
import ProjectSection from "./component/ProjectSection"
import AboutSection from "./component/AboutSection"
import EmailSection from "./component/Emailsection";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#020d0f] ">
    <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <Herosection />
        <AboutSection/>
        <ProjectSection/>
        <EmailSection />
      </div>
      <Footer/>
    </main>
  );
}
