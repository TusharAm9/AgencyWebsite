import MotionBox from "./utilis/MotionBox";
import { SiWebauthn, SiWebmoney } from "react-icons/si";
import { FaWebAwesome } from "react-icons/fa6";

const plans = [
  {
    name: "Basic",
    price: "₹19,999",
    features: ["1 Website", "Up to 6 pages", "Basic SEO", "Support: Email"],
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
    // bgcolor: "bg-gradient-to-r from-[#0d0d0d] to-[#131324]",
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
    icon: <FaWebAwesome width={30} height={30} color="currentColor" />,
  },
];

export default function Pricing() {
  const gradientBG =
    "bg-gradient-to-br from-[#141425] via-[#171834] to-[#18172b]";
  return (
    <section id="pricing" className="bg-[#09090b] pt-20">
      <h2 className="text-6xl md:text-8xl font-bold text-center bg-gradient-to-br from-white to-neutral-800 bg-clip-text text-transparent pb-28">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, i) => (
          <MotionBox
            key={plan.name}
            className={`rounded-xl py-16 w-90 md:w-80 tracking-widest shadow-lg text-white border-white border-1 flex items-center flex-col duration-200 ${gradientBG} hover:bg-gradient-to-t hover:from-violet-900/90 hover:to-zinc-900`}
          >
            <span className="text-[8rem] md:text-8xl mb-4 text-violet-500">
              {plan?.icon}
            </span>
            <h3 className="text-4xl md:text-xl font-semibold mb-2">
              {plan.name}
            </h3>
            <div className="text-6xl md:text-5xl font-bold mb-4">
              {plan.price}
            </div>
            <ul className="mb-6 space-y-2 text-2xl md:text-xl tracking-widest">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="text-violet-500/90">•</span> {f}
                </li>
              ))}
            </ul>
            <button className="bg-violet-400 text-white rounded px-5 py-2 font-semibold hover:bg-violet-800/90 transition scale-150 mt-6 md:scale-150 hover:scale-200">
              Add Plan
            </button>
          </MotionBox>
        ))}
      </div>
    </section>
  );
}
