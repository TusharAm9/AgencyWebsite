import { useState } from "react";
import MotionBox from "./utilis/MotionBox";
import { SiWebauthn, SiWebmoney } from "react-icons/si";
import { FaWebAwesome } from "react-icons/fa6";

const plans = [
  {
    name: "Basic",
    price: "₹19,999",
    features: ["1 Website", "Up to 5 pages", "Basic SEO", "Support: Email"],
    bgcolor: "bg-gradient-to-r from-[#0d0d0d] to-[#131324]",
    icon: <SiWebauthn width={30} height={30} />,
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
    bgcolor: "bg-gradient-to-r from-[#0d0d0d] to-[#131324]",
    icon: <SiWebmoney width={32} height={32} />,
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
    bgcolor: "bg-gradient-to-r from-[#0d0d0d] to-[#131324]",
    icon: <FaWebAwesome width={30} height={30} color="currentColor" />,
  },
];

export default function Pricing() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="pricing" className="bg-[#09090b]">
      <h2 className="text-3xl md:text-8xl font-bold text-center bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent pb-28">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, i) => (
          <MotionBox
            key={plan.name}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`rounded-xl p-8 w-72 tracking-widest shadow-lg text-white border-white border-1 flex items-center flex-col transition-colors duration-300 group-hover:text-violet-300
              ${
                hoveredIdx === null
                  ? `${plan.bgcolor} hover:bg-[radial-gradient(ellipse_at_75%_90%,#8f06ff_10%,#4d178b_30%,#2f0d68_50%,#000_100%)]`
                  : hoveredIdx === 1
                  ? " bg-gradient-to-r from-[#0d0d0d] to-[#131324]"
                  : plan.bgcolor
              }`}
          >
            <span className="text-[9rem] md:text-8xl mb-4 text-violet-500/60 ">
              {plan?.icon}
            </span>
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-4">{plan.price}</div>
            <ul className="mb-6 space-y-2">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="bg-violet-400 text-white rounded px-5 py-2 font-semibold hover:bg-violet-800/90 transition">
              Add Plan
            </button>
          </MotionBox>
        ))}
      </div>
    </section>
  );
}
