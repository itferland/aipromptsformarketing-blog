import React from 'react';

const CaseStudies = (): React.ReactNode => {
  const moreCaseStudies = [
    {
      title: "Automated Onboarding Saves 100+ Hours",
      industry: "HR & Recruiting",
      description: "How we helped a seed-stage SaaS startup cut user-setup time from 2 days to 2 hours.",
    },
    {
      title: "Secure Cloud Migration for Global Co.",
      industry: "IT & Security",
      description: "How we automated a complex cloud migration, cutting downtime to near-zero.",
    },
    {
      title: "Optimizing Lead Generation with AI",
      industry: "Marketing",
      description: "Coming soon.",
    },
    {
      title: "Streamlining Financial Reporting",
      industry: "Finance & Accounting",
      description: "Coming soon.",
    },
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
            Real-World Wins
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            We deliver strategic transformation outcomes that matter. Explore how we've helped businesses like yours eliminate manual work, modernize operations, and achieve significant, measurable results.
          </p>
        </header>

        <main>
          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-teal-400">Featured Case Study</h2>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">AI-Powered Email Management Workflow</h3>
                <p className="mt-2 text-slate-400">
                  <strong>Client:</strong> A Mid-Sized Marketing Agency
                </p>
                <p className="mt-2 text-slate-400">
                  <strong>Pain Point:</strong> The team was spending over 20 minutes per employee, per day, manually reviewing, editing, and categorizing incoming client emails. This led to slow response times and took valuable time away from strategic work.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-slate-100">Analysis:</h4>
                  <ol className="list-decimal list-inside mt-2 space-y-2 text-slate-400">
                    <li><strong>Email Receipt and Segmentation:</strong> Using Gmail filters and an AI categorization tool (like ChatGPT or Mem), emails are automatically segmented.</li>
                    <li><strong>Categorization and Prioritization:</strong> The AI tool automatically labels emails based on their content (e.g., urgent vs. non-urgent).</li>
                    <li><strong>Drafting Responses:</strong> An AI writer is used to draft initial responses based on the email's content and context.</li>
                    <li><strong>Review and Editing:</strong> AI tools for grammar and spell-checking (like Grammarly) ensure high-quality responses.</li>
                    <li><strong>Sending Emails:</strong> Zapier is used to automate the sending of emails, with the potential for AI-driven personalization.</li>
                  </ol>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-slate-100">Results:</h4>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-slate-400">
                    <li><strong>Time Saved:</strong> Reduced the time spent per email from minutes to seconds.</li>
                    <li><strong>Cost Savings:</strong> The automation resulted in a yearly savings of <strong>$996.00</strong> based on processing 100 emails per week.</li>
                    <li><strong>Increased Productivity:</strong> The team was able to reallocate their time to higher-value client strategy and creative work.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-center text-2xl font-bold text-slate-100">More Case Studies</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {moreCaseStudies.map((study) => (
                  <div key={study.title} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-teal-400">{study.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-slate-400">{study.industry}</p>
                    <p className="mt-2 text-slate-400">{study.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CaseStudies;
