import React, { useId } from 'react';

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

const Insights = (): React.ReactNode => {
  return (
    <div className="relative isolate pt-16">
      {/* Background gradients */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <WaveDivider />

      {/* Hero Section */}
      <header className="text-center px-6 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          The Future of Work is Intelligent
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Explore our latest thoughts, research, and practical advice on AI, automation, and business transformation. Stay ahead of the curve with insights from our team of experts.
        </p>
      </header>

      <WaveDivider />

      <main>
        {/* Featured Articles/Blog Posts */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold text-slate-100 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 flex flex-col">
                <div className="h-32 bg-gradient-to-br from-indigo-500 to-teal-400 rounded mb-4" />
                <h3 className="font-semibold text-teal-400 mb-2">From RPA to Agentic AI: Understanding the New Wave of Automation</h3>
                <p className="text-slate-400 text-sm mb-4">The world of automation is evolving. While Robotic Process Automation (RPA) has been a game-changer for years, the rise of Agentic AI and Intelligent Workflows is ushering in a new era of possibilities.</p>
                <a href="#" className="mt-auto text-teal-400 hover:underline">Read More...</a>
              </article>
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 flex flex-col">
                <div className="h-32 bg-gradient-to-br from-indigo-500 to-teal-400 rounded mb-4" />
                <h3 className="font-semibold text-teal-400 mb-2">Are You Ready for AI? A Guide to Assessing Your Company's Maturity</h3>
                <p className="text-slate-400 text-sm mb-4">Before you can successfully implement AI, you need to know where you stand. Our AI readiness assessment helps you look at your company, department, team, and individual capabilities.</p>
                <a href="#" className="mt-auto text-teal-400 hover:underline">Read More...</a>
              </article>
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50 flex flex-col">
                <div className="h-32 bg-gradient-to-br from-indigo-500 to-teal-400 rounded mb-4" />
                <h3 className="font-semibold text-teal-400 mb-2">The "Human in the Loop": Why People are Still Your Most Valuable Asset</h3>
                <p className="text-slate-400 text-sm mb-4">Automation isn't about replacing people; it's about augmenting their abilities. The "Human in the Loop" approach ensures you get the best of both worlds.</p>
                <a href="#" className="mt-auto text-teal-400 hover:underline">Read More...</a>
              </article>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-2xl font-bold text-slate-100 mb-8">From Around the Web</h2>
            <div className="space-y-6">
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <a href="https://www.inc.com/harry-mccracken/generative-ai-changing-business-stanford-mit.html" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:underline">How Generative AI Is Changing Business, According to Stanford and MIT</a>
                <div className="text-slate-400 text-sm mt-2">Source: Inc.</div>
              </article>
              <article className="group relative rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50">
                <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/how-companies-are-using-ai-and-generative-ai" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:underline">How companies are using AI and generative AI</a>
                <div className="text-slate-400 text-sm mt-2">Source: McKinsey & Company</div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Block */}
        <footer className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-2 text-white">Contact AI Solutions Consulting</h2>
              <p className="mb-4 text-slate-300">Let's talk about automating your IT & cloud workflows.</p>
              <ul className="space-y-1 text-slate-300">
                <li><strong>Phone:</strong> <a href="tel:+16034174243" className="text-teal-400">(603) 417-4243</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@aisolutionsconsulting.net" className="text-teal-400">info@aisolutionsconsulting.net</a></li>
                <li><strong>Web:</strong> <a href="/" className="text-teal-400">aisolutionsconsulting.net</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Insights;
