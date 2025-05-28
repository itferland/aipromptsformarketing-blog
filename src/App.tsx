import React, { useState, useEffect } from 'react';
import { askGemini } from './services/geminiService'; // Assuming this calls your backend

// Component for stylized text, like an old terminal
const ArcadeText = ({ as: Component = 'p', children, className = "", ...props }) => {
  return (
    <Component className={`font-press-start ${className}`} {...props}>
      {children}
    </Component>
  );
};

// Header Component
const AppHeader = ({ title, navItems }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(true); // Or manage with scroll
  // Add scroll effect for menu if desired
  // useEffect(() => { ... });

  return (
    <header className="bg-brand-bg-alt/80 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b-2 border-brand-primary-neon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <ArcadeText as="h1" className="text-xl md:text-2xl text-brand-primary-neon tracking-wider animate-text-flicker [--tw-shadow-color:theme(colors.brand-primary-neon)]">
              {title}
            </ArcadeText>
          </div>
          <nav className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-press-start text-xs text-brand-secondary-neon hover:text-brand-accent-neon hover:shadow-neon-secondary px-3 py-2 rounded-md transition-all duration-200 ease-in-out"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Add a mobile menu button here if needed */}
        </div>
      </div>
    </header>
  );
};

// Section Component
const Section = ({ id, title, children, className = "" }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`py-12 md:py-20 border-b-2 border-brand-border last:border-b-0 ${className}`}>
    <ArcadeText as="h2" id={`${id}-title`} className="text-2xl md:text-3xl lg:text-4xl text-brand-accent-neon mb-10 md:mb-16 text-center animate-text-flicker [--tw-shadow-color:theme(colors.brand-accent-neon)]">
      {title}
    </ArcadeText>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

// Button Component
const Button = ({ children, variant = "primary", size = "md", className = "", Icon, ...props }) => {
  const baseStyles = "font-press-start focus:outline-none focus:ring-4 focus:ring-opacity-60 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center rounded-md border-2";
  
  let variantStyles = "";
  switch (variant) {
    case "secondary":
      variantStyles = "bg-brand-bg-alt border-brand-secondary-neon text-brand-secondary-neon hover:bg-brand-secondary-neon hover:text-brand-deep-violet focus:ring-brand-secondary-neon";
      break;
    case "danger":
      variantStyles = "bg-brand-bg-alt border-brand-error-neon text-brand-error-neon hover:bg-brand-error-neon hover:text-brand-deep-violet focus:ring-brand-error-neon";
      break;
    case "primary":
    default:
      variantStyles = "bg-brand-bg-alt border-brand-primary-neon text-brand-primary-neon hover:bg-brand-primary-neon hover:text-brand-deep-violet focus:ring-brand-primary-neon";
      break;
  }

  let sizeStyles = "", iconSize = "w-4 h-4";
  switch (size) {
    case "sm": sizeStyles = "px-4 py-2 text-xs"; iconSize = "w-3 h-3"; break;
    case "lg": sizeStyles = "px-8 py-3 text-base"; iconSize = "w-5 h-5"; break;
    case "md":
    default: sizeStyles = "px-6 py-2.5 text-sm"; break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {Icon && <Icon className={`mr-2 ${iconSize}`} aria-hidden="true" />}
      {children}
    </button>
  );
};


// Gemini Query Component (AI Strategy Tool)
const GeminiQuery = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setError('');
    setResponse('');
    try {
      const result = await askGemini(prompt);
      setResponse(result);
    } catch (err) {
      console.error("Gemini error in component:", err);
      setError(err instanceof Error ? err.message : "⚠️ Failed to get a response.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-brand-bg-codebox border-2 border-brand-primary-neon rounded-lg shadow-neon-primary">
      <ArcadeText as="label" htmlFor="prompt-input" className="block mb-3 text-lg text-brand-primary-neon">
        Enter Your Marketing Challenge:
      </ArcadeText>
      <textarea
        id="prompt-input"
        className="terminal-input h-32"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., How can I use AI to improve customer engagement for a small coffee shop?"
        disabled={isLoading}
      />
      <Button onClick={handleSubmit} disabled={isLoading || !prompt.trim()} className="mt-4 w-full" variant="primary">
        {isLoading ? "Generating Ideas..." : "Get AI Strategy"}
      </Button>
      {error && <p className="text-brand-error-neon mt-3 text-sm">{error}</p>}
      {response && (
        <div className="terminal-output mt-6">
          <ArcadeText as="strong" className="block text-brand-accent-neon mb-2">
            Gemini's Strategic Insights:
          </ArcadeText>
          <p className="font-vt323 text-base leading-relaxed">{response}</p>
        </div>
      )}
    </div>
  );
};

// Case Studies Component
const CaseStudies = ({ studies }) => {
  if (!studies || studies.length === 0) {
    return (
      <div className="text-center text-brand-text-muted py-8">
        <ArcadeText as="p">No case studies available. Check back soon, human!</ArcadeText>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {studies.map((study) => (
        <article
          key={study.id}
          className="bg-brand-bg-alt p-6 rounded-lg shadow-lg border-2 border-brand-border hover:border-brand-secondary-neon hover:shadow-neon-secondary transition-all duration-300 flex flex-col"
        >
          {study.imageUrl && (
            <img
              src={study.imageUrl || `https://placehold.co/600x400/2a003a/f000ff?text=${encodeURIComponent(study.title)}`}
              alt={`${study.title} visual representation`}
              className="rounded-md mb-4 h-48 w-full object-cover border-2 border-brand-secondary-neon"
              onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/1a001a/f000ff?text=Image+Error`)}
            />
          )}
          <ArcadeText as="h3" className="text-lg text-brand-primary-neon mb-2">{study.title}</ArcadeText>
          <p className="text-sm text-brand-text-muted mb-1 font-bold font-vt323">{study.clientName}</p>
          <div className="space-y-3 text-sm text-brand-text flex-grow font-vt323 leading-relaxed">
            <div>
              <strong className="block text-brand-accent-neon font-press-start text-xs">Challenge:</strong>
              <p>{study.challenge}</p>
            </div>
            <div>
              <strong className="block text-brand-accent-neon font-press-start text-xs">Solution:</strong>
              <p>{study.solution}</p>
            </div>
            <div>
              <strong className="block text-brand-accent-neon font-press-start text-xs">Results:</strong>
              <p>{study.results}</p>
            </div>
          </div>
          {study.tags && study.tags.length > 0 && (
            <div className="mt-4 pt-4 border-t-2 border-brand-border">
              <ArcadeText as="h4" className="text-xs text-brand-text-muted mb-2">Key Areas:</ArcadeText>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="bg-brand-bg-codebox text-brand-primary-neon text-xs font-press-start px-2 py-1 rounded-sm border border-brand-primary-neon/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

// Modal Component (for Insights)
const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = React.useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      modalRef.current?.focus();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-brand-bg-alt w-full max-w-3xl max-h-[90vh] rounded-lg shadow-neon-primary border-2 border-brand-primary-neon flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 md:p-6 border-b-2 border-brand-border sticky top-0 bg-brand-bg-alt z-10">
          <ArcadeText as="h2" id="modal-title" className="text-lg md:text-xl text-brand-primary-neon">
            {title}
          </ArcadeText>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-full text-brand-text-muted hover:text-brand-primary-neon hover:bg-brand-bg-codebox focus:outline-none focus:ring-2 ring-offset-2 ring-offset-brand-bg-alt focus:ring-brand-primary-neon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <div className="p-4 md:p-6 overflow-y-auto flex-grow font-vt323 text-base leading-relaxed">
          <div className="prose prose-sm sm:prose-base max-w-none text-brand-text prose-headings:font-press-start prose-headings:text-brand-accent-neon prose-strong:text-brand-primary-neon prose-a:text-brand-secondary-neon hover:prose-a:text-brand-accent-neon">
            {/* Forcing pre-wrap for the content passed as children */}
            <div className="whitespace-pre-line">{children}</div>
          </div>
        </div>
        <footer className="p-4 border-t-2 border-brand-border sticky bottom-0 bg-brand-bg-alt z-10 text-right">
          <Button onClick={onClose} variant="secondary" size="sm">
            Close Window
          </Button>
        </footer>
      </div>
    </div>
  );
};


// Insight Card Component
const InsightCard = ({ insight, onReadMore }) => (
  <article className="bg-brand-bg-alt p-6 rounded-lg shadow-lg border-2 border-brand-border hover:border-brand-accent-neon hover:shadow-neon-secondary transition-all duration-300 flex flex-col h-full">
    <ArcadeText as="h4" className="text-md text-brand-primary-neon mb-2">{insight.title}</ArcadeText>
    <p className="text-xs text-brand-text-muted mb-1 font-vt323">
      Published on: {insight.date}
      {insight.author && ` by ${insight.author}`}
    </p>
    <p className="text-sm text-brand-text mb-4 flex-grow font-vt323 leading-relaxed">{insight.summary}</p>
    {insight.tags && insight.tags.length > 0 && (
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {insight.tags.map((tag) => (
            <span key={tag} className="bg-brand-bg-codebox text-brand-secondary-neon text-xs font-press-start px-2 py-1 rounded-sm border border-brand-secondary-neon/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
    <Button variant="secondary" size="sm" onClick={onReadMore} className="mt-auto" aria-label={`Read more about ${insight.title}`}>
      Read More &gt;
    </Button>
  </article>
);

// Insights Section Component
const InsightsSection = ({ insights }) => {
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (insight) => {
    setSelectedInsight(insight);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInsight(null);
  };

  return (
    <div className="space-y-12">
      {!insights || insights.length === 0 ? (
        <div className="text-center text-brand-text-muted py-8">
          <ArcadeText as="p">No insights available. System scan complete.</ArcadeText>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} onReadMore={() => handleReadMore(insight)} />
          ))}
        </div>
      )}
      <div className="text-center pt-8 mt-8 border-t-2 border-brand-border">
        <ArcadeText as="h3" className="text-xl text-brand-primary-neon mb-4">Want More Intel?</ArcadeText>
        <p className="text-brand-text max-w-md mx-auto mb-6 font-vt323 text-lg">
          Subscribe to our transmission for new articles and strategic dispatches.
        </p>
        <Button variant="primary" onClick={() => alert("Newsletter sign-up sequence initiated... (Coming Soon!)")} aria-label="Notify me about new insights and guides">
          Engage Hyperdrive
        </Button>
      </div>
      {selectedInsight && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedInsight.title}>
          {selectedInsight.fullContent || "Full transmission corrupted... (Content coming soon)"}
        </Modal>
      )}
    </div>
  );
};


const APP_TITLE = "StrategyAI Forge";

const NAV_ITEMS = [
  { label: "AI Strategy Tool", href: "#ai-tool" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Our Approach", href: "#approach" },
  { label: "Insights", href: "#insights" },
];

const CASE_STUDIES_DATA = [
  {
    id: "wicked-skateboards",
    clientName: "Wicked Skateboards",
    title: "Boosting Engagement with AI-Driven Content",
    challenge: "Wicked Skateboards, a local NH skate shop, struggled to consistently create engaging social media content and reach a wider audience.",
    solution: "Developed a 30-day AI-powered content calendar focusing on Instagram. Leveraged Gemini to brainstorm post ideas, draft captions, and suggest relevant hashtags. Implemented a strategy that blended product showcases, local skate spots, and community engagement.",
    results: "Achieved a 40% increase in Instagram engagement, 25% follower growth in the first month. Client reported more customer interactions mentioning their online presence.",
    tags: ["Social Media Marketing", "AI Content Generation", "Community Engagement", "Local Business"],
    imageUrl: "https://placehold.co/600x400/2a003a/00f0ff?text=Wicked+Skateboards+AI" // Placeholder
  },
  {
    id: "startup-automation",
    clientName: "Tech Innovators Inc.",
    title: "Streamlining Operations with Marketing Automation",
    challenge: "A growing tech startup needed to automate lead nurturing and email marketing campaigns to handle increasing volume without hiring more staff.",
    solution: "Audited existing marketing processes and identified key areas for automation. Implemented an email marketing platform with automated workflows for lead segmentation, drip campaigns, and performance tracking. Used AI to personalize email subject lines and content.",
    results: "Reduced manual effort in email marketing by 60%. Improved lead conversion rate by 15% through targeted nurturing. Provided clear dashboards for monitoring campaign performance.",
    tags: ["Marketing Automation", "Email Marketing", "Lead Nurturing", "AI Personalization"],
    imageUrl: "https://placehold.co/600x400/2a003a/f000ff?text=Tech+Automation" // Placeholder
  }
];

const INSIGHTS_DATA = [
   {
    id: "ai-content-future",
    title: "The Future of Content: How AI is Revolutionizing Strategy",
    summary: "Explore the transformative impact of artificial intelligence on content creation, personalization, and distribution. Learn how to leverage AI tools for a more effective content strategy in the modern digital landscape.",
    date: "November 20, 2023",
    slug: "future-of-content-ai-strategy",
    author: "Dr. Lex AI",
    tags: ["AI", "Content Marketing", "Strategy", "Innovation", "Future Tech"],
    fullContent: `Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality reshaping industries, and content strategy is no exception. Its ability to process vast amounts of data, learn patterns, and generate human-like text is revolutionizing how businesses approach content creation, personalization, and distribution.

**1. Enhanced Content Creation:**
AI-powered tools can assist in brainstorming ideas, generating drafts, optimizing for SEO, and even creating variations of content for different platforms. This significantly speeds up the content lifecycle and allows marketers to focus on higher-level strategy and creativity. From blog posts to social media updates and product descriptions, AI can provide a solid foundation, ensuring consistency in tone and style.

**2. Hyper-Personalization at Scale:**
Understanding customer preferences is key to effective marketing. AI algorithms can analyze user behavior, demographic data, and interaction history to deliver highly personalized content experiences. This means showing the right content to the right person at the right time, increasing engagement and conversion rates. Imagine website content that dynamically adapts to each visitor or email campaigns with individually tailored messaging.

**3. Optimized Content Distribution:**
AI can help identify the best channels and times to distribute content for maximum reach and impact. It can analyze platform performance, predict trends, and automate posting schedules. Furthermore, AI tools can assist in identifying influencers and optimizing ad spend for content promotion.

**4. Data-Driven Insights and Performance Tracking:**
By analyzing content performance metrics, AI can provide actionable insights into what resonates with the audience and what doesn't. This allows for continuous improvement of content strategy, ensuring that efforts are aligned with business objectives and audience expectations.

**Embracing the AI Revolution:**
To stay competitive, businesses must embrace AI in their content strategies. This doesn't mean replacing human creativity but augmenting it. The future lies in a symbiotic relationship where AI handles repetitive tasks and data analysis, freeing up human marketers to focus on strategic thinking, storytelling, and building genuine connections with their audience.

While there are ethical considerations and challenges to address, such as data privacy and the potential for bias, the transformative potential of AI in content marketing is undeniable.`
  },
  {
    id: "automation-roi-maximization",
    title: "Maximizing ROI with Marketing Automation: A Practical Guide",
    summary: "Discover practical steps to implement marketing automation effectively and measure its return on investment. From email workflows to lead scoring, unlock efficiency and sustainable growth for your business.",
    date: "November 12, 2023",
    slug: "marketing-automation-roi-guide",
    author: "Auto Bot",
    tags: ["Marketing Automation", "ROI", "Efficiency", "Lead Nurturing", "Email Marketing"],
    fullContent: `Marketing automation promises efficiency and improved results, but achieving a tangible return on investment (ROI) requires a strategic approach. This guide outlines practical steps to implement marketing automation effectively and ensure it contributes to sustainable business growth.

**1. Define Clear Objectives:**
Before implementing any automation, clearly define what you want to achieve. Are you looking to increase lead generation, improve conversion rates, enhance customer retention, or reduce manual workload? Specific, measurable, achievable, relevant, and time-bound (SMART) goals will guide your strategy and help measure success.

**2. Understand Your Audience and Customer Journey:**
Map out your customer journey to identify touchpoints where automation can add value. Segment your audience based on demographics, behavior, and engagement levels to deliver targeted and relevant automated communications.

**3. Choose the Right Tools:**
Select a marketing automation platform that aligns with your needs and budget. Consider features like email marketing, lead management, CRM integration, analytics, and scalability. Start simple if needed and expand capabilities as your business grows.

**4. Implement Key Automation Workflows:**
- **Welcome Series:** Automate a series of emails to onboard new subscribers or customers.
- **Lead Nurturing Campaigns:** Develop drip campaigns to educate leads and guide them through the sales funnel.
- **Abandoned Cart Reminders:** For e-commerce, automatically remind customers about items left in their cart.
- **Lead Scoring:** Assign scores to leads based on their engagement and demographics to prioritize sales follow-up.
- **Post-Purchase Follow-ups:** Engage customers after a purchase to encourage repeat business and gather feedback.

**5. Personalize Your Communications:**
Leverage data to personalize automated messages. Use dynamic content, merge tags, and behavioral triggers to make your communications feel more relevant and less robotic.

**6. Test, Analyze, and Optimize:**
Continuously monitor the performance of your automation workflows. A/B test different elements like subject lines, content, and calls to action. Use analytics to identify what's working and where improvements can be made. Regularly refine your strategies based on data-driven insights.

**7. Integrate with Other Systems:**
Ensure your marketing automation platform integrates seamlessly with your CRM, sales tools, and other relevant systems. This provides a unified view of customer interactions and improves overall efficiency.

By following these practical steps, businesses can move beyond simply using automation tools to strategically leveraging them for maximizing ROI and achieving significant improvements in their marketing and sales outcomes.`
  },
  {
    id: "nh-tech-spotlight",
    title: "Emerging Tech Trends in New Hampshire: A Local Perspective",
    summary: "A deep dive into the burgeoning tech scene in New Hampshire. Highlighting key areas of growth, local innovators, and what these advancements mean for businesses operating in the Granite State.",
    date: "November 5, 2023",
    slug: "nh-tech-trends-local-perspective",
    author: "Granite Coder",
    tags: ["New Hampshire", "Local Tech", "Innovation", "Business Growth", "Community"],
    fullContent: `The Granite State is increasingly becoming a hub for technological innovation. This article explores some of the key tech trends emerging in New Hampshire and their implications for local businesses and the community.
(Full content for this article would explore specific NH tech sectors, companies, and initiatives in more detail...)`
  }
];


function App() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <AppHeader title={APP_TITLE} navItems={NAV_ITEMS} />
      <main className="flex-grow">
        <Section id="ai-tool" title="AI STRATEGY INTERFACE" className="bg-brand-deep-violet">
          <GeminiQuery />
        </Section>
        <Section id="case-studies" title="MISSION LOGS // SUCCESSES" className="bg-brand-bg-alt">
          <CaseStudies studies={CASE_STUDIES_DATA} />
        </Section>
        <Section id="approach" title="THE FORGE // OUR DOCTRINE" className="bg-brand-deep-violet">
          <div className="space-y-6 text-brand-text text-lg leading-relaxed max-w-3xl mx-auto text-center font-vt323">
            <p>
              <ArcadeText as="span" className="text-brand-primary-neon">SYSTEM ONLINE:</ArcadeText> Welcome to {APP_TITLE}! We specialize in crafting AI-powered marketing and automation strategies to elevate your brand and streamline your operations.
            </p>
            <p>
              Our approach is collaborative and results-driven. We combine deep expertise in emerging technologies like Google's Gemini API with proven marketing principles to deliver innovative solutions tailored to your unique business needs.
            </p>
            <p>
              Whether you're looking to generate creative content, automate repetitive tasks, or gain deeper insights from your data, we're here to help you navigate the evolving digital landscape and achieve sustainable growth.
            </p>
            <p>
              Access the <ArcadeText as="span" className="text-brand-accent-neon">AI Strategy Interface</ArcadeText> for instant ideas, or browse our <ArcadeText as="span" className="text-brand-accent-neon">Mission Logs</ArcadeText> to see the tangible impact we've made.
            </p>
          </div>
        </Section>
        <Section id="insights" title="DATA STREAMS // LATEST INTEL" className="bg-brand-bg-alt">
          <InsightsSection insights={INSIGHTS_DATA} />
        </Section>
      </main>
      <footer className="bg-brand-bg-codebox border-t-2 border-brand-primary-neon py-8 text-center">
        <ArcadeText as="p" className="text-brand-text-muted text-sm">
          © {new Date().getFullYear()} {APP_TITLE}. AI-Powered Marketing & Automation.
        </ArcadeText>
        <ArcadeText as="p" className="text-brand-secondary-neon text-xs mt-1">
          Let's build the future of your business, together. END OF LINE.
        </ArcadeText>
      </footer>
    </div>
  );
}

export default App; 