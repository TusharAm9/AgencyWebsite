import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Outstanding work! The attention to detail and innovative approach exceeded our expectations. Delivered on time and within budget.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Incredible technical skills and creative problem-solving. The final product was exactly what we envisioned and more.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Design Director",
    company: "Creative Studio",
    content:
      "A true professional with exceptional design sense. The collaboration was smooth and the results were phenomenal.",
    rating: 4,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "InnovateLab",
    content:
      "Transformed our vision into reality with precision and creativity. Highly recommend for any complex project.",
    rating: 3,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "VP Engineering",
    company: "TechGiant",
    content:
      "Exceptional quality and attention to user experience. The project exceeded all our performance metrics.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
  },
];

// ----- Testimonial Card -----
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 min-w-[350px] md:min-w-[400px] h-auto shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30 group relative">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 ring-2 ring-cyan-500/30 group-hover:ring-cyan-400/50 transition-all duration-300"
        />
        <div>
          <h4 className="text-white font-semibold text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-sm">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
      {/* Optional gradient highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

// ----- Main Scroller -----
function TestimonialScroller() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // -- Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // -- Scroll button states
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  useEffect(() => {
    checkScrollButtons();
  }, []);

  // -- Manual scroll (buttons)
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // ----- AUTO-SCROLL LOGIC -----
  useEffect(() => {
    if (!isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      let isHovered = false;

      const handleMouseEnter = () => {
        isHovered = true;
      };
      const handleMouseLeave = () => {
        isHovered = false;
      };
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      // Get the width of a single copy
      const singleWidth = container.scrollWidth / 2;

      let interval = setInterval(() => {
        if (!isHovered && container) {
          if (container.scrollLeft >= singleWidth) {
            // Instantly snap back (no smooth) to the "start" copy
            container.scrollLeft = 0;
          } else {
            // Continue regular scrolling
            container.scrollBy({ left: 2, behavior: "auto" });
          }
        }
        checkScrollButtons();
      }, 14); // Adjust speed as before

      return () => {
        clearInterval(interval);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isMobile]);

  // -- JSX
  return (
    <div className="bg-[#09090b] min-h-screen py-20 px-4 relative overflow-hidden">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-[#08090b]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Trusted by industry leaders and innovative companies worldwide
          </p>
        </div>

        {/* --- Desktop: Horizontal Scrolling with Auto-scroll & Shadows --- */}
        {!isMobile && (
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
                  : "text-gray-600 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
                  : "text-gray-600 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* --- Scrollable Container --- */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto px-16 py-4 scrollbar-hide relative"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.concat(testimonials).map((testimonial, idx) => (
                <div key={idx + "-" + testimonial.id} className="relative">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* --- Fade Shadows on Left/Right --- */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-20">
              <div className="w-full h-full bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-20">
              <div className="w-full h-full bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            </div>
          </div>
        )}

        {/* --- Mobile: Stacked Cards with Top/Bottom Fade --- */}
        {isMobile && (
          <div className="relative">
            <div className="space-y-6 max-h-[600px] overflow-y-auto px-4 scrollbar-hide">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="relative">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            {/* Top/Bottom Gradients for Mobile Fade */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
          </div>
        )}
      </div>
    </div>
  );
}

export default TestimonialScroller;
