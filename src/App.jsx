import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProcessTimeline from "./components/ProcessTimeline";
import TestimonialScroller from "./components/TestimonialScroller";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <ProcessTimeline />
      <TestimonialScroller />
      {/* <TestimonialsVariant1 /> */}
      {/* <Bento /> */}
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
