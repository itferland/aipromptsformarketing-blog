import React, { useState, useId } from 'react';
import Chatbot from '../components/Chatbot';
import { SparklesIcon, ShieldCheckIcon, ChartBarIcon } from '../components/Icons';

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

export default function Home(): React.ReactNode {
    const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <div className="relative isolate pt-16">

        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <WaveDivider />

        <header className="grid md:grid-cols-2 items-center gap-8 px-6 max-w-6xl mx-auto py-12 md:py-20">
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              AI Solutions, Made Practical.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Cloud-native AI solutions that scale with your business – no infrastructure headaches, no lengthy implementations
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-base text-teal-300 font-semibold">
              <span>✓ 30-day deployment</span>
              <span>✓ Cloud-hosted</span>
              <span>✓ Pay-as-you-scale</span>
              <span>✓ White-glove migration</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsChatOpen(true)}
              className="relative z-10 w-full max-w-sm cursor-pointer group focus:outline-none"
              aria-label="Click to talk to our AI assistant"
            >
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="path-gradient-1" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <linearGradient id="path-gradient-2" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#14B8A6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <linearGradient id="path-gradient-3" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  </filter>
                </defs>

                <g style={{ filter: 'url(#glow)', transformOrigin: 'center center' }}>
                  <g style={{ animation: 'spin 10s linear infinite', transformOrigin: 'center center' }}>
                    <path d="M 150 50 C 50 50, 50 350, 150 350 S 400 200, 200 100 S 150 50, 150 50" stroke="url(#path-gradient-1)" strokeWidth="8" strokeLinecap="round" />
                  </g>
                  <g style={{ animation: 'spin-reverse 12s linear infinite', transformOrigin: 'center center' }}>
                    <path d="M 250 50 C 350 50, 350 350, 250 350 S 0 200, 200 300 S 250 50, 250 50" stroke="url(#path-gradient-2)" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
                  </g>
                  <g style={{ animation: 'spin 8s linear infinite', transformOrigin: 'center center' }}>
                    <path d="M 200 50 C 100 50, 100 350, 200 350 S 350 100, 250 150 S 200 50, 200 50" stroke="url(#path-gradient-3)" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
                  </g>
                </g>
              </svg>
            </button>
            <div className="mt-6">
              <a href="/contact" className="inline-block rounded-md bg-teal-400 px-8 py-4 font-semibold text-slate-900 shadow hover:bg-teal-300 transition">
                Get Your SaaS AI Assessment
              </a>
            </div>
          </div>
        </header>

        <WaveDivider />

        <main>
          {/* BENEFITS */}
          <section className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 py-16 px-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
                <SparklesIcon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">Eliminate Manual Work</h3>
              <p className="mt-2 text-sm text-slate-400">Automate tedious tasks so your team can focus on growth.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
                <ShieldCheckIcon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">Cloud Identity Security</h3>
              <p className="mt-2 text-sm text-slate-400">Protect logins and data with simple, secure cloud identity.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
                <ChartBarIcon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">Modernize Operations</h3>
              <p className="mt-2 text-sm text-slate-400">Streamline processes with modern, integrated tools.</p>
            </div>
          </section>

          {/* PERSONA HIGHLIGHTS */}
          <section className="py-16">
            <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 px-6">
              <div>
                <h2 className="text-xl font-bold text-slate-100">For Startups&nbsp;&amp;&nbsp;SMBs</h2>
                <p className="mt-4 text-slate-400">
                  Launch enterprise-grade capabilities without the enterprise overhead. Our SaaS platform plugs into your
                  existing tools and gets you up and running in days, not months.
                </p>
                <a href="/platform" className="mt-4 inline-block font-semibold text-teal-400 hover:underline">
                  How the Platform Works →
                </a>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-100">For Enterprises</h2>
                <p className="mt-4 text-slate-400">
                  Solve complex challenges with a partner who understands enterprise needs. Our consultants implement
                  secure, compliant solutions tailored to your business.
                </p>
                <a href="/consulting" className="mt-4 inline-block font-semibold text-teal-400 hover:underline">
                  Our Consulting Process →
                </a>
              </div>
            </div>
          </section>

          {/* INSIGHTS TEASER */}
          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6 text-center">
              <h2 className="text-xl font-bold text-slate-100">Latest Insight</h2>
              <p className="mt-4 text-lg font-medium text-slate-300">
                Guide:&nbsp;5 Quick Automations Every Business Can Deploy
              </p>
              <p className="mt-2 text-slate-400">
                Learn how small teams achieve big wins with simple automations.
              </p>
              <a href="/insights" className="mt-6 inline-block rounded-md border border-teal-400 px-6 py-3 text-teal-400
                                        hover:bg-teal-400/10">Explore Insights →</a>
            </div>
          </section>

          {/* FOOTER CTA */}
          <footer className="py-16">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h2 className="text-2xl font-extrabold text-white">
                Ready to eliminate manual work and supercharge your growth?
              </h2>
              <a href="/contact"
                className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow
                          hover:bg-slate-200">Let’s Talk →</a>
            </div>
          </footer>
        </main>
      </div>
      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  );
}
