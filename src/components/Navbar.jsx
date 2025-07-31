import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActive(targetId);
    }
  };

  const links = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Blog", to: "blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#09090b] backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl cursor-pointer tracking-wider">
          T<span className="text-violet-400">✧</span>STUUDIO
        </div>
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map(({ name, to }) => (
            <li key={to}>
              <a
                href={`#${to}`}
                onClick={(e) => handleClick(e, to)}
                className={`transition-colors duration-300 font-semibold tracking-tight ${
                  active === to
                    ? "text-neutral-200 shadow-lg"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
          <a
            className="bg-violet-500 items-center text-neutral-300 px-6 py-2 rounded-lg font-semibold hover:bg-violet-800 transition shadow-lg text-shadow-lg "
            href="#contact"
          >
            Contact Us
          </a>
        </ul>

        {/* For mobile: you can add a hamburger + dropdown menu here*/}
      </div>
    </nav>
  );
}
