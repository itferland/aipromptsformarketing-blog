import React, { useId } from 'react';
import { SparklesIcon, ChartBarIcon } from '../components/Icons';

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

const Platform = (): React.ReactNode => {
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
            The OS for Intelligent Automation
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Our platform is more than just a tool; it's a scalable ecosystem designed to integrate seamlessly into your existing workflows, eliminate tedious tasks, and unlock your team's potential for growth. From startups to enterprises, we provide the power of AI without the complexity.
          </p>
        </div>
        <div className="flex items-center justify-center">
          {/* Placeholder for hero image */}
          <div className="w-[340px] h-[220px] bg-gradient-to-br from-indigo-500 to-teal-400 rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold text-white opacity-80">Platform Dashboard</div>
        </div>
      </header>

      <WaveDivider />

      <main>
        {/* Features Section */}
        <section className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 py-16 px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <SparklesIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">Build & Deploy Intelligent Workflows</h3>
            <p className="mt-2 text-sm text-slate-400">Visualize your processes and identify automation opportunities with our intuitive Workflow Builder. Map out each step and identify where AI can be applied to save time and reduce errors.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <ChartBarIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">From Insight to Action</h3>
            <p className="mt-2 text-sm text-slate-400">Understand your organization's AI maturity at every level. Our assessment tools allow you to evaluate your readiness and develop a clear strategy for implementation.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <span className="w-8 h-8 text-teal-400">💡</span>
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">Accelerate Your AI Adoption</h3>
            <p className="mt-2 text-sm text-slate-400">Access a vast library of over 54,000+ prompts and pre-built solutions for various business functions. Deploy powerful AI solutions quickly and efficiently.</p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold text-slate-100 mb-8">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 text-center">
                <div className="text-3xl mb-2">1️⃣</div>
                <h3 className="font-semibold mb-2 text-teal-400">Assess</h3>
                <p className="text-slate-400 text-sm">Start with our comprehensive assessments to pinpoint your biggest automation opportunities and AI readiness.</p>
              </div>
              <div className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 text-center">
                <div className="text-3xl mb-2">2️⃣</div>
                <h3 className="font-semibold mb-2 text-teal-400">Strategize</h3>
                <p className="text-slate-400 text-sm">Use our workflow tools to map your current processes and design a future-state with integrated AI.</p>
              </div>
              <div className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 text-center">
                <div className="text-3xl mb-2">3️⃣</div>
                <h3 className="font-semibold mb-2 text-teal-400">Automate</h3>
                <p className="text-slate-400 text-sm">Deploy AI solutions using our library of prompts and automation tools, including agentic AI and intelligent workflows.</p>
              </div>
              <div className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 text-center">
                <div className="text-3xl mb-2">4️⃣</div>
                <h3 className="font-semibold mb-2 text-teal-400">Measure</h3>
                <p className="text-slate-400 text-sm">Track your success with clear metrics. Calculate your savings differential—see weekly, monthly, and yearly savings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/Tiers Section */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold text-slate-100 mb-8">Pricing & Tiers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <h3 className="font-semibold text-teal-400">For Startups & SMBs</h3>
                <p className="mt-2 text-sm text-slate-400 mb-4">Launch enterprise-grade capabilities without the enterprise overhead. Our SaaS platform plugs into your existing tools and gets you up and running in days, not months.</p>
                <ul className="list-disc list-inside text-slate-300 text-sm">
                  <li>Access to the full prompt library</li>
                  <li>Workflow builder</li>
                  <li>Standard assessment tools</li>
                  <li>Community support</li>
                </ul>
              </article>
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <h3 className="font-semibold text-teal-400">For Enterprises</h3>
                <p className="mt-2 text-sm text-slate-400 mb-4">Solve complex challenges with a partner who understands enterprise needs. Our consultants implement secure, compliant solutions tailored to your business.</p>
                <ul className="list-disc list-inside text-slate-300 text-sm">
                  <li>Everything in the SMB plan</li>
                  <li>Privacy-focused options</li>
                  <li>Advanced security features</li>
                  <li>Custom integrations</li>
                  <li>Dedicated support</li>
                </ul>
              </article>
            </div>
            <div className="text-center mt-8">
              <a href="/contact" className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">See the Platform in Action</a>
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

export default Platform;
