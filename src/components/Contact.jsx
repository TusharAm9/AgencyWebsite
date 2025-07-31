export default function Contact() {
  return (
    <section id="contact" className="bg-[#09090b] py-20">
      <h2 className="pb-4 text-3xl md:text-6xl text-center font-extrabold bg-gradient-to-br from-white to-violet-300 bg-clip-text text-transparent mb-14">
        Contact
      </h2>
      <form
        className="
          max-w-md mx-auto 
          flex flex-col gap-6 
          bg-gradient-to-br from-gray-900/60 via-[#18182f]/80 to-black/50
          border border-gray-800/70
          rounded-2xl
          backdrop-blur-md
          shadow-xl
          p-8
        "
        autoComplete="off"
      >
        <input
          type="text"
          className="
            rounded-lg px-4 py-3
            bg-[#191929] text-white/90
            placeholder:text-gray-400
            outline-none border border-transparent
            focus:border-cyan-400 transition
            text-base
          "
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="
            rounded-lg px-4 py-3
            bg-[#191929] text-white/90
            placeholder:text-gray-400
            outline-none border border-transparent
            focus:border-cyan-400 transition
            text-base
          "
          placeholder="Your Email"
          required
        />
        <textarea
          className="
            rounded-lg px-4 py-3
            bg-[#191929] text-white/90
            placeholder:text-gray-400
            outline-none border border-transparent
            focus:border-cyan-400 transition
            text-base
            min-h-[120px]
          "
          rows={5}
          placeholder="Your Message"
          required
        />
        <button
          type="submit"
          className="
            w-full mt-2 py-3 px-6
            bg-white/10 text-white font-bold text-lg
            rounded-lg
            hover:bg-white/20 transition
            focus:outline-none focus:ring-2 focus:ring-cyan-400
          "
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
