import React from 'react';
import { SparklesIcon, ShieldCheckIcon, ChartBarIcon } from '../components/Icons';

const WaveDivider = (): React.ReactNode => {
  return (
    <div className="w-full h-20" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0,40 C360,120 1080,-40 1440,40"
          stroke="#A855F7"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default function Consulting(): React.ReactNode {
  return (
    <div className="relative isolate pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <WaveDivider />
      <header className="text-center px-6 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Consulting Services
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          We help you automate onboarding, secure cloud identity, and modernize file storage with practical, lightweight tools—no enterprise complexity.
        </p>
      </header>
      <WaveDivider />
      <main>
        <section className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 py-16 px-6">
          {/* SaaS AI Platform Setup */}
          <div className="flex flex-col items-center text-center bg-slate-800/40 rounded-xl p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10 mb-2">
              <SparklesIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-2 font-semibold text-slate-100 text-lg">SaaS AI Platform Setup</h3>
            <p className="mt-2 text-sm text-slate-400">Deploy pre-built AI solutions in your cloud environment for instant productivity gains.</p>
            <ul className="mt-4 text-sm text-slate-300 text-left">
              <li><strong>Timeline:</strong> 30–60 days</li>
              <li><strong>Starting at:</strong> $7,500</li>
              <li><strong>Platforms:</strong> Azure AI, Google Cloud AI, AWS SageMaker</li>
            </ul>
          </div>
          {/* Custom SaaS Integration */}
          <div className="flex flex-col items-center text-center bg-slate-800/40 rounded-xl p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10 mb-2">
              <ShieldCheckIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-2 font-semibold text-slate-100 text-lg">Custom SaaS Integration</h3>
            <p className="mt-2 text-sm text-slate-400">Connect AI tools to your existing SaaS stack (Salesforce, HubSpot, etc.) for seamless workflows.</p>
            <ul className="mt-4 text-sm text-slate-300 text-left">
              <li><strong>Timeline:</strong> 45–90 days</li>
              <li><strong>Starting at:</strong> $10,000</li>
              <li><strong>Platforms:</strong> Salesforce, HubSpot, Zapier, Slack, Microsoft 365</li>
            </ul>
          </div>
          {/* SaaS AI Optimization */}
          <div className="flex flex-col items-center text-center bg-slate-800/40 rounded-xl p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10 mb-2">
              <ChartBarIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-2 font-semibold text-slate-100 text-lg">SaaS AI Optimization</h3>
            <p className="mt-2 text-sm text-slate-400">Maximize ROI from your current AI software investments with expert tuning and analytics.</p>
            <ul className="mt-4 text-sm text-slate-300 text-left">
              <li><strong>Timeline:</strong> 30–60 days</li>
              <li><strong>Starting at:</strong> $5,000</li>
              <li><strong>Platforms:</strong> Azure AI, Google Cloud AI, DataRobot, OpenAI</li>
            </ul>
          </div>
          {/* Cloud Migration & AI Enablement */}
          <div className="flex flex-col items-center text-center bg-slate-800/40 rounded-xl p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10 mb-2">
              <SparklesIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-2 font-semibold text-slate-100 text-lg">Cloud Migration & AI Enablement</h3>
            <p className="mt-2 text-sm text-slate-400">Move legacy systems to cloud-first AI solutions for future-ready operations.</p>
            <ul className="mt-4 text-sm text-slate-300 text-left">
              <li><strong>Timeline:</strong> 60–90 days</li>
              <li><strong>Starting at:</strong> $15,000</li>
              <li><strong>Platforms:</strong> AWS, Azure, Google Cloud, Microsoft 365</li>
            </ul>
          </div>
        </section>
        <footer className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-extrabold text-white">
              Want to see what’s possible for your team?
            </h2>
            <a href="/contact" className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">Let’s Talk →</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
