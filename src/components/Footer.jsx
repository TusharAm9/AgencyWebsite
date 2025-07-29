export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-white py-8 flex flex-col items-center">
      <div className="flex gap-6 mb-4">
        {/* Replace # with your actual links. Use SVGs for black/dark icons */}
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-black bg-white rounded-full p-2"
        >
          {/* LinkedIn SVG */}
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="text-black bg-white rounded-full p-2"
        >
          {/* GitHub SVG */}
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-black bg-white rounded-full p-2"
        >
          {/* Twitter SVG */}
        </a>
      </div>
      <p className="text-sm opacity-80">
        © {new Date().getFullYear()} Peka Tech
      </p>
    </footer>
  );
}
