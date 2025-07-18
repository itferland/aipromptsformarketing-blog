import React from 'react';

const Insights = (): React.ReactNode => {
  const articles = [
    {
      title: "From RPA to Agentic AI: Understanding the New Wave of Automation",
      excerpt: "The world of automation is evolving. While Robotic Process Automation (RPA) has been a game-changer for years, the rise of Agentic AI and Intelligent Workflows is ushering in a new era of possibilities. This article breaks down the different types of workflows and explains how you can leverage them in your business.",
      link: "#",
    },
    {
      title: "Are You Ready for AI? A Guide to Assessing Your Company's Maturity",
      excerpt: "Before you can successfully implement AI, you need to know where you stand. Our AI readiness assessment helps you look at your company, department, team, and individual capabilities. Learn the key questions you should be asking to develop a successful AI strategy.",
      link: "#",
    },
    {
      title: "The 'Human in the Loop': Why People are Still Your Most Valuable Asset in an Automated World",
      excerpt: "Automation isn't about replacing people; it's about augmenting their abilities. The 'Human in the Loop' approach ensures that you get the best of both worlds: the efficiency of AI and the strategic oversight of your expert team. Discover how to strike the right balance.",
      link: "#",
    },
  ];

  const externalResources = [
    {
      title: "How Generative AI Is Changing Business, According to Stanford and MIT",
      source: "Inc.",
      link: "https://www.inc.com/harry-mccracken/generative-ai-changing-business-stanford-mit.html",
    }
  ];

  return (
    <div className="text-white">
      <div className="relative isolate pt-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <header className="text-center py-12 md:py-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            The Future of Work is Intelligent
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Explore our latest thoughts, research, and practical advice on AI, automation, and business transformation. Stay ahead of the curve with insights from our team of experts.
          </p>
        </header>

        <main>
          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid gap-8 md:grid-cols-3">
                {articles.map((article) => (
                  <div key={article.title} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                    <h2 className="text-xl font-bold text-teal-400">{article.title}</h2>
                    <p className="mt-4 text-slate-400">{article.excerpt}</p>
                    <a href={article.link} className="mt-4 inline-block font-semibold text-teal-400 hover:underline">
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-center text-2xl font-bold text-slate-100">From Around the Web</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {externalResources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-teal-900/50"
                  >
                    <h3 className="font-semibold text-teal-400">{resource.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">Source: {resource.source}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Insights;
