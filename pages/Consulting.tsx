import React from 'react';
import { PenToolIcon, ShieldCheckIcon, ChartBarIcon } from '../components/Icons';

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
        <section className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 py-16 px-6">
          <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accentPen/10">
              <PenToolIcon className="w-6 h-6 text-accentPen" />
            </div>
            <h3 className="text-lg font-semibold text-white">Email Lead Triage</h3>
            <p className="mt-2 text-sm text-slate-400">AI scores & routes hot leads</p>
            <a href="/automation-saas/#triage" className="mt-4 inline-block font-semibold text-accentPen hover:underline">See details →</a>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accentShield/10">
              <ShieldCheckIcon className="w-6 h-6 text-accentShield" />
            </div>
            <h3 className="text-lg font-semibold text-white">Support Intelligence</h3>
            <p className="mt-2 text-sm text-slate-400">Prioritise VIP tickets</p>
            <a href="/automation-saas/#support" className="mt-4 inline-block font-semibold text-accentShield hover:underline">See details →</a>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accentChart/10">
              <ChartBarIcon className="w-6 h-6 text-accentChart" />
            </div>
            <h3 className="text-lg font-semibold text-white">SaaS Sync Hub</h3>
            <p className="mt-2 text-sm text-slate-400">Salesforce ↔ HubSpot ↔ Slack</p>
            <a href="/automation-saas/#sync" className="mt-4 inline-block font-semibold text-accentChart hover:underline">See details →</a>
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
