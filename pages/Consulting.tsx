import React from 'react';

const Consulting = (): React.ReactNode => {
  const coreAreas = [
    "Marketing: Lead Gen & Biz Dev",
    "Sales & Conversion",
    "Productivity",
    "Admin & Customer Service",
    "HR & Recruiting",
    "Assets & Product Dev",
    "Operation Optimization",
    "Finance & Accounting",
    "Legal & Compliance",
    "R&D & Innovation",
    "Content & Media",
    "IT & Security",
  ];

  const whoWeWorkWith = [
    {
      title: "Innovative Startups",
      text: "We help you scale rapidly with efficient systems, overcoming budget limitations and integration complexities.",
    },
    {
      title: "Enterprise Innovators",
      text: "We provide compliant, reliable, and secure AI solutions that navigate procurement barriers and meet stringent security needs.",
    },
    {
      title: "Eco-Conscious Brands",
      text: "We help you balance profit and impact by integrating sustainable technology solutions.",
    },
    {
      title: "Growth-Focused Agencies",
      text: "We empower you to deliver tech-driven value to your clients, helping you scale without sacrificing quality.",
    },
  ];

  return (
    <div className="text-white">
      <div className="relative isolate pt-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <header className="text-center py-12 md:py-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Strategic AI partnership for transformational results
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            We merge deep consulting expertise with our powerful SaaS platform to deliver tailored AI solutions that evolve with your business. Our mission is to revolutionize consulting by delivering not just advice, but integrated, scalable, and practical AI implementations that solve your most pressing problems.
          </p>
        </header>

        <main>
          <section className="py-16">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h2 className="text-2xl font-bold text-slate-100">A Hybrid Model for a New Era of Business</h2>
              <p className="mt-4 text-lg text-slate-400">
                We offer more than just a software subscription or a traditional consulting engagement. We provide a continuous partnership through a hybrid model that combines our scalable SaaS platform with high-touch, expert consulting. This fusion ensures you get a solution that is not only customized to your industry and size but is also supported by ongoing strategic guidance.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-center text-2xl font-bold text-slate-100">Our Expertise Spans Your Entire Organization</h2>
              <p className="mt-4 text-center text-lg text-slate-400">
                We have identified 12 core areas where AI can drive significant business impact. Our team works with you to identify and implement solutions across these domains:
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {coreAreas.map((area) => (
                  <div key={area} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                    <p className="font-semibold text-slate-100">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-center text-2xl font-bold text-slate-100">Your Partner in Innovation</h2>
              <p className="mt-4 text-center text-lg text-slate-400">
                We work with a diverse range of clients, from fast-growing startups to established enterprises. Our ideal clients are forward-thinking organizations ready to embrace technology for a competitive edge.
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {whoWeWorkWith.map((client) => (
                  <div key={client.title} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-teal-400">{client.title}</h3>
                    <p className="mt-2 text-slate-400">{client.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="py-16 text-center">
            <a href="/contact" className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">
              Book a Strategy Session
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Consulting;
