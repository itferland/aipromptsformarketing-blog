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

export default function Insights(): React.ReactNode {
  return (
    <div className="relative isolate pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <WaveDivider />
      <header className="text-center px-6 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Insights & Thought Leadership
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Explore our latest guides, articles, and thought leadership on AI, cloud transformation, and digital innovation.
        </p>
      </header>
      <WaveDivider />
      <main>
        <section className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 py-16 px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <SparklesIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">AI in the Cloud</h3>
            <p className="mt-2 text-sm text-slate-400">How AI is transforming cloud operations and business agility.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <ShieldCheckIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">Security & Compliance</h3>
            <p className="mt-2 text-sm text-slate-400">Best practices for zero-trust security and regulatory compliance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/10">
              <ChartBarIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">Innovation & ROI</h3>
            <p className="mt-2 text-sm text-slate-400">Driving measurable business value through digital innovation.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-xl font-bold text-slate-100">Latest Guides & Articles</h2>
            <p className="mt-4 text-slate-400">Stay ahead with our expert insights on AI, cloud, and digital transformation. Contact us to contribute or request a topic.</p>
            <a href="mailto:info@aisolutionsconsulting.net" className="mt-6 inline-block rounded-md border border-teal-400 px-6 py-3 text-teal-400 hover:bg-teal-400/10">Contact for Insights →</a>
          </div>
        </section>
        <footer className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-extrabold text-white">
              Want more insights or a custom guide?
            </h2>
            <a href="/contact" className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">Let’s Talk →</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
