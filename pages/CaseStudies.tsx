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

const CaseStudies = (): React.ReactNode => {
  return (
    <div className="relative isolate pt-16">
      {/* Background gradients */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <WaveDivider />
      <header className="text-center px-6 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Enterprise Cloud Transformation with AI Solutions Consulting
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Unlock digital success with our proven, AI-first approach to cloud transformation. We blend expert consulting with AI-powered automation to migrate your legacy systems, enhance security, and drive measurable ROI—all while helping you secure grant funding to reduce implementation costs.
        </p>
      </header>
      <WaveDivider />
      <main>
        <section className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Why Cloud Transformation is a Business Imperative</h2>
          <ul className="list-disc ml-6 mb-6 text-slate-300">
            <li><b>Unprecedented Growth:</b> The global cloud computing market is projected to hit $912.77 billion in 2025.</li>
            <li><b>Widespread Adoption:</b> 86% of enterprises now use hybrid cloud solutions to gain a competitive edge.</li>
            <li><b>Proven Returns:</b> Cloud migration delivers an average return of $3.86 for every dollar spent.</li>
            <li><b>AI Integration is Key:</b> 78% of cloud leaders combine AI with their cloud infrastructure, driving significant efficiency gains.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Overcoming Common Cloud Transformation Challenges</h2>
          <ul className="list-disc ml-6 mb-6 text-slate-300">
            <li><b>Infrastructure and Cost Complexity:</b> Enterprises often struggle with legacy systems, fragmented data silos, and the escalating costs of maintaining on-premises hardware.</li>
            <li><b>Security and Compliance Risks:</b> Security is a top concern, with 60% of enterprises citing it as a major barrier. Implementing a modern zero-trust security framework is critical to protect against threats that take legacy systems 247 hours to detect.</li>
            <li><b>Operational and Talent Bottlenecks:</b> Lack of talent and complexity can derail projects, with 42% of organizations falling behind schedule on cloud implementations and 44% citing a lack of skilled professionals as the top impediment.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Proven AI-First Cloud Transformation Framework</h2>
          <ol className="list-decimal ml-6 mb-6 text-slate-300">
            <li><b>Phase 1: AI-Enhanced Strategic Assessment (Months 1-2):</b> We start by using AI-driven discovery tools to map your infrastructure, identify cost-saving opportunities with predictive analytics, and establish a security baseline. Concurrently, we develop a grant application strategy to secure funding.</li>
            <li><b>Phase 2: Intelligent Cloud Migration & DevSecOps (Months 3-8):</b> Our AI-driven platform automates code translation and manages migration with predictive risk management to ensure zero downtime. We deploy secure DevSecOps pipelines, integrating automated security scanning directly into your workflows.</li>
            <li><b>Phase 3: Continuous Optimization and Scaling (Months 9-12):</b> Post-migration, we use machine learning algorithms for performance tuning and automated resource management to control costs. We empower your team with the knowledge for sustainable, long-term operations.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">See the Measurable Results: From Cost to ROI</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-left text-sm border border-slate-700">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="py-2 px-4 border-b border-slate-700">Performance Metric</th>
                  <th className="py-2 px-4 border-b border-slate-700">Industry Average</th>
                  <th className="py-2 px-4 border-b border-slate-700">Our AI-Enhanced Results</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2 px-4 border-b border-slate-700">Cost Reduction</td><td className="py-2 px-4 border-b border-slate-700">30-40% TCO savings</td><td className="py-2 px-4 border-b border-slate-700">&gt;$550K annual savings</td></tr>
                <tr><td className="py-2 px-4 border-b border-slate-700">Operational Efficiency</td><td className="py-2 px-4 border-b border-slate-700">67% improved agility</td><td className="py-2 px-4 border-b border-slate-700">2× faster workflows</td></tr>
                <tr><td className="py-2 px-4 border-b border-slate-700">Error Reduction</td><td className="py-2 px-4 border-b border-slate-700">36% fewer misconfigs</td><td className="py-2 px-4 border-b border-slate-700">23% fewer billing mistakes</td></tr>
                <tr><td className="py-2 px-4 border-b border-slate-700">Security Posture</td><td className="py-2 px-4 border-b border-slate-700">18 min threat detection</td><td className="py-2 px-4 border-b border-slate-700">Real-time threat response</td></tr>
                <tr><td className="py-2 px-4 border-b border-slate-700">Deployment Speed</td><td className="py-2 px-4 border-b border-slate-700">65% faster time-to-market</td><td className="py-2 px-4 border-b border-slate-700">30% shorter dev cycles</td></tr>
                <tr><td className="py-2 px-4">ROI Achievement</td><td className="py-2 px-4">65% positive ROI in 1 yr</td><td className="py-2 px-4">10× greater returns</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Secure Grant Funding for Your Cloud Project</h2>
          <p className="mb-4 text-slate-300">A unique part of our service is helping you secure grants and funding to offset implementation costs. We have a proven track record of navigating federal, state, and private funding opportunities.</p>
          <ul className="list-disc ml-6 mb-4 text-slate-300">
            <li><b>Federal & State Funding Opportunities</b>
              <ul className="list-disc ml-6">
                <li>Technology Modernization Fund (TMF): Offers up to $6 million for AI and modernization projects.</li>
                <li>State & Regional Programs: Provide between $38,500 and $540,000 for technology solutions.</li>
                <li>Digital Transformation Grants: Offer matching funds and cover up to 50% of cloud computing investments.</li>
              </ul>
            </li>
            <li><b>Private and Corporate Grants</b>
              <ul className="list-disc ml-6">
                <li>AWS Imagine Grant: Provides up to $50,000 for infrastructure modernization.</li>
                <li>Technology Modernization Grants: Fund comprehensive cybersecurity assessments and upgrades.</li>
              </ul>
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Why Choose AI Solutions Consulting?</h2>
          <ul className="list-disc ml-6 mb-6 text-slate-300">
            <li><b>SME and Enterprise Expertise:</b> We design agile, budget-conscious solutions that deliver rapid business impact. Our deep expertise in both enterprise systems and small-business agility sets us apart.</li>
            <li><b>Unique AI-First & Funding-Forward Model:</b> Our grant funding guidance reduces your out-of-pocket costs, while our AI-first methodology delivers superior automation, efficiency, and ROI compared to traditional consultants.</li>
            <li><b>A Partner in Your Success:</b> We provide comprehensive support from initial assessment through ongoing optimization, ensuring you build a future-ready infrastructure prepared for the next wave of innovation.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Schedule Your Free Cloud Strategy Assessment Today</h2>
          <p className="mb-4 text-slate-300">Ready to transform your enterprise with confidence? Contact us to discover how our AI-enhanced cloud transformation services can drive growth, efficiency, and a powerful return on your investment.</p>
          <p className="mb-2 font-semibold text-slate-300">Let's build your success story together.</p>
          <p className="mb-2 text-slate-300">Email: <a href="mailto:info@aisolutionsconsulting.net" className="text-teal-400 underline">info@aisolutionsconsulting.net</a></p>
          <p className="text-slate-300">Online: <a href="/contact" className="text-teal-400 underline">Contact Us</a></p>
        </section>
      </main>
    </div>
  );
};

export default CaseStudies;
