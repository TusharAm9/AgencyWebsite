export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-12">
      <h2 className="text-6xl md:text-8xl font-bold text-center bg-gradient-to-br from-white to-neutral-800 bg-clip-text text-transparent pb-28">
        Contact
      </h2>
      <form className="max-w-lg mx-auto flex flex-col gap-5">
        <input
          type="text"
          className="p-3 rounded bg-[#18181c] text-white"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="p-3 rounded bg-[#18181c] text-white"
          placeholder="Your Email"
        />
        <textarea
          className="p-3 rounded bg-[#18181c] text-white"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button className="bg-white text-black rounded px-6 py-2 font-semibold hover:bg-gray-200 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
