import React from 'react';

const WaveDivider = (): React.ReactNode => {
  return (
    <div className="w-full h-20" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,40 C360,120 1080,-40 1440,40" stroke="#A855F7" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};

export default function About(): React.ReactNode {
  return (
    <div className="relative isolate pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <WaveDivider />
      <header className="text-center px-6 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">About Us</h1>
        <p className="mt-6 text-lg text-slate-300">
          <strong>Why we exist</strong> — founders saw teams drowning in manual glue-work between Gmail,
          CRMs, and spreadsheets.
        </p>
        <p className="mt-4 text-lg text-slate-300">
          <strong>What we ship</strong> — ready-made SaaS modules (Email Lead Triage, Support Intel, SaaS
          Sync) built on n8n & serverless infra.
        </p>
        <p className="mt-4 text-lg text-slate-300">
          <strong>Track record</strong> — <code>10 hrs / wk saved</code> at Meredith Marina pilot, 95 % triage
          accuracy.
        </p>
        <p className="mt-4 text-lg text-slate-300">
          <strong>Who we serve</strong> — bootstrapped SaaS & agencies handling 50-500 inbound leads / mo.
        </p>
      </header>
      <WaveDivider />
    </div>
  );
}
