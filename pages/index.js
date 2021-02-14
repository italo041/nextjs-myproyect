import Experiencia from "../components/Experiencia";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      <div className="md:flex md:flex-col md:h-screen ">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Experiencia />
      <Footer />
    </div>
  );
}
