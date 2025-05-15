
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
export default function App() {

  return (
    <div className="bg-[#1b1f24] text-white font-[Poppins]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
