import React from 'react';

// Inline SVG icons for the new project cards
const LogInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);
const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const FileStackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <rect x="6" y="6" width="12" height="6" rx="1" />
    <rect x="4" y="12" width="16" height="6" rx="1" />
  </svg>
);

// Updated WaveDivider with new color and opacity
const WaveDivider = (): React.ReactNode => {
  return (
    <div className="w-full h-20" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0,40 C360,120 1080,-40 1440,40"
          stroke="#7c3aed"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default function CaseStudies(): React.ReactNode {
  return (
    <div className="relative isolate pt-16 bg-[#0d0d0d] min-h-screen">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      {/* HERO */}
      <section className="relative isolate flex flex-col items-center py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Success Stories — Coming Soon
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          We’re partnering with our first adopters right now. <br />
          Join us and your project could be the headline here next quarter.
        </p>
        <WaveDivider />
      </section>
      {/* PROJECT CARDS */}
      <section className="mx-auto max-w-6xl grid gap-12 md:grid-cols-3 mt-20 text-center px-6">
        {/* Onboarding automation */}
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#073b4c] to-[#032736]">
            <LogInIcon className="h-6 w-6 text-teal-300" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Automated User On-boarding</h3>
          <p className="mt-2 text-sm text-slate-400">
            Accounts, licences, welcome emails—created in minutes, not days.
          </p>
        </div>
        {/* Cloud identity */}
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#073b4c] to-[#032736]">
            <ShieldIcon className="h-6 w-6 text-teal-300" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Single Sign-On & MFA</h3>
          <p className="mt-2 text-sm text-slate-400">
            One login for users, stronger zero-trust security for you.
          </p>
        </div>
        {/* Legacy file migration */}
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#073b4c] to-[#032736]">
            <FileStackIcon className="h-6 w-6 text-teal-300" />
          </div>
          <h3 className="mt-4 font-semibold text-white">Legacy File-Server Migration</h3>
          <p className="mt-2 text-sm text-slate-400">
            Move shared drives to Google or Microsoft 365 with version history intact.
          </p>
        </div>
      </section>
      {/* WHAT YOU'LL GAIN */}
      <section className="mt-24 max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold text-white">What early adopters can expect</h2>
        <ul className="mt-6 space-y-4 text-slate-300">
          <li>🚀 <strong>Faster releases:</strong> automated pipelines instead of manual deploys.</li>
          <li>🔒 <strong>Cleaner security posture:</strong> SSO, MFA, and logging from day one.</li>
          <li>📊 <strong>Transparent costs:</strong> usage dashboards and no hidden licence fees.</li>
        </ul>
      </section>
      {/* CTA STRIP */}
      <section className="mt-24 mb-32 text-center">
        <a href="/contact"
           className="inline-block rounded-md border border-teal-400 px-8 py-4 font-semibold text-teal-300 hover:bg-teal-400/10">Book a Discovery Call →</a>
        <p className="mt-4 text-slate-400">
          Be one of the first three clients and help shape the roadmap. <br />
          We’ll meet for 30 minutes, map out your quickest win, and send you a step-by-step action plan—free.
        </p>
      </section>
    </div>
  );
}
