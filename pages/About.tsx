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
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          About AI Solutions Consulting
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Practical automation, built by someone who’s been on the front lines
        </p>
      </header>
      <WaveDivider />
      <main className="mx-auto max-w-4xl px-6 space-y-12 py-12">
        <section>
          <h2 className="text-2xl font-bold text-white">Meet the Founder</h2>
          <p className="mt-4 text-slate-300">
            I’m Eric Ferland—an infrastructure and security engineer who spent 15 years running lean IT
            environments where uptime mattered and budgets didn’t bend. After managing everything from
            municipal police-department networks to global travel-tech clouds, I kept seeing the same pattern:
          </p>
          <p className="mt-4 text-slate-300">
            Powerful tools fall flat when they ignore day-to-day workflows.
          </p>
          <p className="mt-4 text-slate-300">
            AI Solutions Consulting exists to bridge that gap—pairing real-world ops experience with
            lightweight, AI-driven automation so you get results this quarter, not next year.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">Mission</h2>
          <p className="mt-4 text-slate-300">
            Help resource-strapped teams unlock speed, security, and scale by making advanced automation
            practical and painless.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">Core Values</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
            <li>
              <strong>Innovation, minus the hype</strong> – Pilot fast, prove value, then scale.
            </li>
            <li>
              <strong>Collaboration first</strong> – We build with you, not for you.
            </li>
            <li>
              <strong>Adaptability</strong> – Solutions flex to your stack, budget, and talent.
            </li>
            <li>
              <strong>Integrity</strong> – Clear scopes, transparent pricing, brutal honesty.
            </li>
            <li>
              <strong>Empowerment</strong> – We up-skill your team so the wins keep coming after we leave.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">The Journey So Far</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
            <li>
              Ran a single-person IT department for 16 years at the Town of Meredith—partnering with vendors,
              maintaining CJIS compliance, and delivering 99.9 % uptime with limited resources.
            </li>
            <li>
              Tackled everything from Fortinet firewall rollouts to Google Workspace migrations for a fully
              remote workforce of 200+ at Atlas Travel &amp; Technology.
            </li>
            <li>
              Pivoted during a 2024 layoff to master generative-AI workflows, open-sourcing production-grade
              n8n stacks and building a job-search copilot that shortened hiring cycles from weeks to days.
            </li>
            <li>
              Founded AI Solutions Consulting LLC in July 2025 to give growing companies the same unfair
              advantage.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">Credentials &amp; Proof Points</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-300">
            <li>
              10+ years designing and securing hybrid infrastructures (Fortinet ⬩ Okta ⬩ Google Workspace ⬩
              Veeam ⬩ VMware).
            </li>
            <li>Deep automation toolkit: Python, PowerShell, Node.js, n8n, Docker, GitHub Actions.</li>
            <li>
              Previously held CJIS Security Certification—evidence of working in high-compliance environments.
            </li>
            <li>
              Speaker and contributor on AI-driven workflow design, cloud security, and DevOps automation.
            </li>
          </ul>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-bold text-white">Ready to Modernize Without the Growing Pains?</h2>
          <p className="mt-4 text-slate-300">Let’s map a low-risk pilot that proves ROI in 30 days or less.</p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200"
          >
            Book a discovery call →
          </a>
          <p className="mt-4 text-slate-400">AI Solutions Consulting – Automation that works in the real world.</p>
        </section>
      </main>
      <WaveDivider />
    </div>
  );
}
