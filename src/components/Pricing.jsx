import { useState } from "react";
import MotionBox from "./utilis/MotionBox";
import TiltListItem from "./utilis/TiltListItem";

const plans = [
  {
    name: "Basic",
    price: "₹19,999",
    features: ["1 Website", "Up to 6 pages", "Basic SEO", "Support: Email"],
    icon: (
      <span className="text-3xl" role="img" aria-label="Getting started">
        🏁
      </span>
    ),
  },
  {
    name: "Standard",
    price: "₹25,999",
    features: [
      "2 Websites",
      "Up to 10 pages",
      "Advanced SEO",
      "Priority Support",
    ],
    icon: (
      <span className="text-3xl" role="img" aria-label="Standard">
        🚀
      </span>
    ),
  },
  {
    name: "Pro",
    price: "₹39,999",
    features: [
      "6 Websites",
      "Unlimited pages",
      "Full SEO Suite",
      "24/7 Support",
    ],
    icon: (
      <span className="text-3xl" role="img" aria-label="Premium">
        👑
      </span>
    ),
  },
];

export default function Pricing() {
  const [showForm, setShowForm] = useState(false);
  function PlanContactForm({ onClose }) {
    const [form, setForm] = useState({
      name: "",
      email: "",
      note: "",
      datetime: "",
    });

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 w-96 shadow-lg relative">
          <button onClick={onClose} className="absolute top-3 right-4 text-xl">
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">
            Let's discuss the work 1st, then pay.
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-2 rounded border"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-2 rounded border"
            />
            <textarea
              name="note"
              placeholder="What are you thinking to build?"
              value={form.note}
              onChange={handleChange}
              required
              className="p-2 rounded border resize-none"
            />
            <label>
              When will you be available?
              <input
                name="datetime"
                type="datetime-local"
                value={form.datetime}
                onChange={handleChange}
                required
                className="p-2 rounded border w-full"
              />
            </label>
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 rounded"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    );
  }

  const cardBG =
    "bg-gradient-to-br from-gray-900/50 via-[#141425]/80 to-black/70 backdrop-blur-md border border-gray-800/60";
  return (
    <section id="pricing" className="bg-[#09090b] pt-20 pb-24">
      <h2 className="pb-4 text-3xl md:text-7xl text-center font-extrabold bg-gradient-to-br from-white to-violet-300 bg-clip-text text-transparent mb-16">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        {plans.map((plan) => (
          <TiltListItem key={plan.name}>
            <MotionBox
              className={`
              ${cardBG}
              rounded-2xl w-[92vw] max-w-xs p-8
              flex flex-col items-center
              shadow-lg
              hover:border-cyan-400/50
              transition-all duration-200
              group
            `}
              style={{ minHeight: 400 }}
            >
              <span className="mb-5 flex items-center justify-center">
                {plan.icon}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white text-center">
                {plan.name}
              </h3>
              <div className="text-2xl md:text-4xl font-extrabold text-cyan-400 mb-4 text-center">
                {plan.price}
              </div>
              <ul className="mb-5 space-y-3 w-full text-center">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex flex-col items-center text-gray-200 text-base md:text-lg font-normal"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowForm(true)}
                className="mt-auto px-6 py-3 bg-white/5 text-white text-lg md:text-2xl font-bold rounded-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Add Plan
              </button>
            </MotionBox>
          </TiltListItem>
        ))}
      </div>
      {showForm && <PlanContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
