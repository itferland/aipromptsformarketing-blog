import React from 'react';
import { SparklesIcon, ShieldCheckIcon, ChartBarIcon } from '../components/Icons';

const Platform = (): React.ReactNode => {
  return (
    <div className="text-white">
      <div className="relative isolate pt-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <header className="text-center py-12 md:py-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            The OS for Intelligent Automation
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Our platform is more than just a tool; it's a scalable ecosystem designed to integrate seamlessly into your existing workflows, eliminate tedious tasks, and unlock your team's potential for growth. From startups to enterprises, we provide the power of AI without the complexity.
          </p>
        </header>

        <main>
          <section className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 py-16 px-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
                <SparklesIcon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">Build & Deploy Intelligent Workflows</h3>
              <p className="mt-2 text-sm text-slate-400">Visualize your processes and identify automation opportunities with our intuitive Workflow Builder. As seen in our email management workflow, you can map out each step, from "Email Receipt and Segmentation" to "Sending Emails," and identify where AI can be applied to save time and reduce errors. Our platform helps you transition from manual processes that take hours to automated workflows that operate in minutes.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
                <ChartBarIcon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">From Insight to Action</h3>
              <p className="mt-2 text-sm text-slate-400">Understand your organization's AI maturity at every level. Our assessment tools allow you to evaluate your readiness and develop a clear strategy for implementation, whether at the individual, team, department, or company-wide level. We help you answer critical questions about aligning your AI strategy with business goals and measuring success across your organization.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
                <ShieldCheckIcon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">Accelerate Your AI Adoption</h3>
              <p className="mt-2 text-sm text-slate-400">You don't have to start from scratch. Gain access to a vast library of over 54,000+ prompts and pre-built solutions for various business functions, including SEO, Email & SMS, Human Resources, and Sales. This curated library allows you to deploy powerful AI solutions quickly and efficiently.</p>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-center text-2xl font-bold text-slate-100">How It Works</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-teal-400">1. Assess</h3>
                  <p className="mt-2 text-slate-400">Start with our comprehensive assessments to pinpoint your biggest automation opportunities and AI readiness.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-teal-400">2. Strategize</h3>
                  <p className="mt-2 text-slate-400">Use our workflow tools to map your current processes and design a future-state with integrated AI.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-teal-400">3. Automate</h3>
                  <p className="mt-2 text-slate-400">Deploy AI solutions using our library of prompts and automation tools, including agentic AI, intelligent workflows, and robotic process automations.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-teal-400">4. Measure</h3>
                  <p className="mt-2 text-slate-400">Track your success with clear metrics. Our platform can help you calculate your savings differential, showing you the weekly, monthly, and yearly savings in both time and money. For example, automating email review can lead to yearly savings of over $996.00 for every 100 emails.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 px-6">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-slate-100">For Startups & SMBs</h2>
                <p className="mt-4 text-slate-400">
                  Launch enterprise-grade capabilities without the enterprise overhead. Our SaaS platform plugs into your existing tools and gets you up and running in days, not months.
                </p>
                <p className="mt-4 text-slate-400">
                  <strong>Includes:</strong> Access to the full prompt library, workflow builder, standard assessment tools, and community support.
                </p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-slate-100">For Enterprises</h2>
                <p className="mt-4 text-slate-400">
                  Solve complex challenges with a partner who understands enterprise needs. Our consultants implement secure, compliant solutions tailored to your business.
                </p>
                <p className="mt-4 text-slate-400">
                  <strong>Includes:</strong> Everything in the SMB plan, plus privacy-focused options, advanced security features, custom integrations, and dedicated support.
                </p>
              </div>
            </div>
          </section>

          <footer className="py-16 text-center">
            <a href="/contact" className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">
              See the Platform in Action
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Platform;
