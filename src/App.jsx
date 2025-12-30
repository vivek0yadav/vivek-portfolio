import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AnimatedBlob from "./components/AnimatedBlob";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <AnimatedBlob />
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
