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

export default function Platform(): React.ReactNode {
  return (
    <div className="relative isolate pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <WaveDivider />
      <header className="text-center px-6 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          The AI Solutions Platform
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Our platform connects your favorite tools, automates manual work, and secures your cloud identity—all with a lightweight, no-bloat approach designed for real business needs.
        </p>
      </header>
      <WaveDivider />
      <main>
        <section className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 py-16 px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <SparklesIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">Seamless Automation</h3>
            <p className="mt-2 text-sm text-slate-400">Connects your apps and automates repetitive tasks—no code required.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <ShieldCheckIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">Cloud Identity Security</h3>
            <p className="mt-2 text-sm text-slate-400">Modern, secure identity management to protect your data and users.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <ChartBarIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">Practical Modernization</h3>
            <p className="mt-2 text-sm text-slate-400">Move off fragile spreadsheets and legacy systems—without the enterprise price tag.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-xl font-bold text-slate-100">How It Works</h2>
            <p className="mt-4 text-slate-400">We map your workflow, build the simplest solution, and empower your team to use it—no complex onboarding, no endless projects.</p>
            <a href="mailto:info@aisolutionsconsulting.net" className="mt-6 inline-block rounded-md border border-teal-400 px-6 py-3 text-teal-400 hover:bg-teal-400/10">Request a Demo →</a>
          </div>
        </section>
        <footer className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-extrabold text-white">
              Ready to see the platform in action?
            </h2>
            <a href="/contact" className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">Let’s Talk →</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
