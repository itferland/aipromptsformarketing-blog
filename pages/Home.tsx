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
        {/* background blobs */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <WaveDivider />

        <header className="grid md:grid-cols-2 items-center gap-8 px-6 max-w-6xl mx-auto py-12 md:py-20">
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Automation SaaS that runs your busywork 24 / 7.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Plug-and-play workflows for email triage, lead nurturing &amp; SaaS sync—deployed in one day.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-base text-teal-300 font-semibold">
              <span>✓ Scales with your inbox</span>
              <span>✓ N8N powered, fully editable</span>
              <span>✓ ROI-backed guarantee</span>
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
              <a
                href="/automation-saas/"
                className="inline-block rounded-md bg-teal-400 px-8 py-4 font-semibold text-slate-900 shadow hover:bg-teal-300 transition"
              >
                Explore Automation SaaS
              </a>
            </div>
          </div>
        </header>

        <WaveDivider />

        <main>
          {/* BENEFITS */}
          {/* … existing sections unchanged … */}

          {/* PERSONA HIGHLIGHTS */}
          <section className="py-16">
            <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 px-6">
              <div>
                <h2 className="text-xl font-bold text-slate-100">For Startups&nbsp;&amp;&nbsp;SMBs</h2>
                <p className="mt-4 text-slate-400">
                  Launch enterprise-grade capabilities without the enterprise overhead.
                </p>
                <a
                  href="/automation-saas/"
                  className="mt-4 inline-block font-semibold text-teal-400 hover:underline"
                >
                  How the Platform Works →
                </a>
              </div>
              {/* second column unchanged */}
            </div>
          </section>
        </main>
      </div>

      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  );
}
