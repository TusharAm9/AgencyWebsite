const plans = [
  {
    name: "Basic",
    price: "₹9,999",
    features: ["1 Website", "Up to 5 pages", "Basic SEO", "Support: Email"],
  },
  {
    name: "Standard",
    price: "₹19,999",
    features: [
      "2 Websites",
      "Up to 10 pages",
      "Advanced SEO",
      "Priority Support",
    ],
  },
  {
    name: "Pro",
    price: "₹34,999",
    features: [
      "Unlimited Websites",
      "Unlimited pages",
      "Full SEO Suite",
      "24/7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-950 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-[#18181c] rounded-xl p-8 w-72 shadow-lg text-white"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-4">{plan.price}</div>
            <ul className="mb-6 space-y-2">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="bg-white text-black rounded px-5 py-2 font-semibold hover:bg-gray-200 transition">
              Choose
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
