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
  const cardBG =
    "bg-gradient-to-br from-gray-900/50 via-[#141425]/80 to-black/70 backdrop-blur-md border border-gray-800/60";
  return (
    <section id="pricing" className="bg-[#09090b] pt-20 pb-24">
      <h2 className="pb-4 text-3xl md:text-7xl text-center font-extrabold bg-gradient-to-br from-white to-violet-300 bg-clip-text text-transparent mb-16">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center gap-7">
        {plans.map((plan) => (
          <TiltListItem>
            <MotionBox
              key={plan.name}
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
              <button className="mt-auto px-6 py-3 bg-white/5 text-white text-lg md:text-2xl font-bold rounded-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300">
                Add Plan
              </button>
            </MotionBox>
          </TiltListItem>
        ))}
      </div>
    </section>
  );
}
