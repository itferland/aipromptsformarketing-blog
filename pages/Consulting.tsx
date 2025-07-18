import React, { useId } from 'react';

const WaveDivider = (): React.ReactNode => {
  const id = useId();
  return (
    <div className="w-full h-20" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0,40 C360,120 1080,-40 1440,40"
          stroke={`url(#${id})`}
          strokeWidth="1.5"
          fill="none"
        />
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.1" />
            <stop offset="25%" stopColor="#A855F7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#14B8A6" stopOpacity="1" />
            <stop offset="75%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Consulting = (): React.ReactNode => {
  return (
    <div className="relative isolate pt-16">
      {/* Background gradients */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <WaveDivider />

      {/* Hero Section */}
      <header className="grid md:grid-cols-2 items-center gap-8 px-6 max-w-6xl mx-auto py-12 md:py-20">
        <div className="text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Strategic AI partnership for transformational results
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            We merge deep consulting expertise with our powerful SaaS platform to deliver tailored AI solutions that evolve with your business. Our mission is to revolutionize consulting by delivering not just advice, but integrated, scalable, and practical AI implementations that solve your most pressing problems.
          </p>
        </div>
        <div className="flex items-center justify-center">
          {/* Placeholder for hero image */}
          <div className="w-[340px] h-[220px] bg-gradient-to-br from-indigo-500 to-teal-400 rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold text-white opacity-80">Team Collaboration</div>
        </div>
      </header>

      <WaveDivider />

      <main>
        {/* Our Approach Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
              <h2 className="text-xl font-bold text-slate-100 mb-4">A Hybrid Model for a New Era of Business</h2>
              <p className="text-slate-400">We offer more than just a software subscription or a traditional consulting engagement. We provide a continuous partnership through a hybrid model that combines our scalable SaaS platform with high-touch, expert consulting. This fusion ensures you get a solution that is not only customized to your industry and size but is also supported by ongoing strategic guidance.</p>
            </article>
          </div>
        </section>

        {/* Core Areas of Implementation Section */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold text-slate-100 mb-8">Our Expertise Spans Your Entire Organization</h2>
            <p className="text-slate-400 text-center mb-8">We have identified 12 core areas where AI can drive significant business impact. Our team works with you to identify and implement solutions across these domains:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Marketing: Lead Gen & Biz Dev',
                'Sales & Conversion',
                'Productivity',
                'Admin & Customer Service',
                'HR & Recruiting',
                'Assets & Product Dev',
                'Operation Optimization',
                'Finance & Accounting',
                'Legal & Compliance',
                'R&D & Innovation',
                'Content & Media',
                'IT & Security',
              ].map((area) => (
                <div key={area} className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 text-center">
                  <span className="text-slate-100 font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold text-slate-100 mb-8">Your Partner in Innovation</h2>
            <p className="text-slate-400 text-center mb-8">We work with a diverse range of clients, from fast-growing startups to established enterprises. Our ideal clients are forward-thinking organizations ready to embrace technology for a competitive edge.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <h3 className="font-semibold text-teal-400 mb-2">Innovative Startups</h3>
                <p className="text-slate-400 text-sm">We help you scale rapidly with efficient systems, overcoming budget limitations and integration complexities.</p>
              </article>
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <h3 className="font-semibold text-teal-400 mb-2">Enterprise Innovators</h3>
                <p className="text-slate-400 text-sm">We provide compliant, reliable, and secure AI solutions that navigate procurement barriers and meet stringent security needs.</p>
              </article>
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <h3 className="font-semibold text-teal-400 mb-2">Eco-Conscious Brands</h3>
                <p className="text-slate-400 text-sm">We help you balance profit and impact by integrating sustainable technology solutions.</p>
              </article>
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <h3 className="font-semibold text-teal-400 mb-2">Growth-Focused Agencies</h3>
                <p className="text-slate-400 text-sm">We empower you to deliver tech-driven value to your clients, helping you scale without sacrificing quality.</p>
              </article>
            </div>
            <div className="text-center mt-8">
              <a href="/contact" className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">Book a Strategy Session</a>
            </div>
          </div>
        </section>

        {/* Contact Block */}
        <footer className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-2 text-white">Contact AI Solutions Consulting</h2>
              <p className="mb-4 text-slate-300">Let's talk about automating your IT & cloud workflows.</p>
              <ul className="space-y-1 text-slate-300">
                <li><strong>Phone:</strong> <a href="tel:+16034174243" className="text-teal-400">(603) 417-4243</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@aisolutionsconsulting.net" className="text-teal-400">info@aisolutionsconsulting.net</a></li>
                <li><strong>Web:</strong> <a href="/" className="text-teal-400">aisolutionsconsulting.net</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Consulting;
