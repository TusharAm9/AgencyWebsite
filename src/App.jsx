import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bento from "./components/Bento";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Bento />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
