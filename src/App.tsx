// src/App.tsx
import React, { useState, useEffect, useRef } from 'react';
// Assuming your geminiService.ts is correctly set up to call your backend proxy
import { askGemini } from './services/geminiService'; 

// Use this for headings primarily
const PixelHeading = ({ as: Component = 'p', children, className = "", ...props }) => {
  return (
    <Component className={`font-press-start ${className}`} {...props}>
      {children}
    </Component>
  );
};

// Use this for most body/terminal text
const PixelText = ({ as: Component = 'p', children, className = "", ...props }) => {
  return (
    <Component className={`font-vt323 ${className}`} {...props}>
      {children}
    </Component>
  );
};


const AppHeader = ({ title, navItems }) => {
  return (
    <header className="bg-jules-bg-header/90 backdrop-blur-sm sticky top-0 z-50 border-b-2 border-jules-border-accent shadow-neon-cyan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <PixelHeading as="h1" className="text-lg md:text-xl text-jules-cyan animate-text-glow">
              {title} <span className="blinking-cursor"></span>
            </PixelHeading>
          </div>
          <nav className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-press-start text-xs text-jules-magenta hover:text-jules-yellow px-3 py-2 transition-colors duration-200 ease-in-out"
                    aria-label={`Maps to ${item.label} section`}
                  >
                    [{item.label}]
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* TODO: Mobile menu button and panel */}
        </div>
      </div>
    </header>
  );
};

const Section = ({ id, title, children, className = "", titleClassName = "" }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`py-10 md:py-16 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <PixelHeading as="h2" id={`${id}-title`} className={`panel-title text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 ${titleClassName}`}>
        {title}
      </PixelHeading>
      {children}
    </div>
  </section>
);

const RetroButton = ({ children, variant = "primary", size = "md", className = "", Icon, ...props }) => {
  let variantStyles = "";
  switch (variant) {
    case "secondary":
      variantStyles = "retro-button-secondary";
      break;
    case "primary":
    default:
      variantStyles = "retro-button-primary";
      break;
  }
  return (
    <button className={`${variantStyles} ${className}`} {...props}>
      {Icon && <Icon className="mr-2 h-4 w-4" aria-hidden="true" />}
      {children}
    </button>
  );
};


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
      setError(err instanceof Error ? err.message : "ERROR: Transmission failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="panel max-w-3xl mx-auto">
      <PixelHeading as="label" htmlFor="prompt-input" className="block mb-4 text-lg text-jules-cyan">
        &gt; Input Command // AI Strategy Query:
      </PixelHeading>
      <textarea
        id="prompt-input"
        className="terminal-input h-36 text-base"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., Generate marketing slogans for a retro arcade bar..."
        disabled={isLoading}
      />
      <RetroButton onClick={handleSubmit} disabled={isLoading || !prompt.trim()} className="mt-5 w-full text-base py-3" variant="primary">
        {isLoading ? "EXECUTING..." : "EXECUTE QUERY"}
      </RetroButton>
      {error && (
        <PixelText className="text-jules-magenta mt-4 text-sm bg-black/30 p-2 border border-jules-magenta">
          SYSTEM ERROR: {error}
        </PixelText>
      )}
      {response && (
        <div className="terminal-output mt-6">
          <PixelHeading as="strong" className="block text-jules-yellow mb-2 text-sm">
            &gt; Gemini Matrix Output:
          </PixelHeading>
          <PixelText className="text-base leading-relaxed">{response}</PixelText>
        </div>
      )}
    </div>
  );
};

const CaseStudies = ({ studies }) => {
  if (!studies || studies.length === 0) {
    return (
      <div className="text-center text-jules-text-light py-8">
        <PixelText as="p">&lt;No mission logs found in archive&gt;</PixelText>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {studies.map((study) => (
        <article
          key={study.id}
          className="panel flex flex-col h-full" /* Apply panel style and ensure full height for flex items */
        >
          {study.imageUrl && (
            <img
              src={study.imageUrl || `https://placehold.co/600x400/${study.id === 'wicked-skateboards' ? '0A0A1A/00FFFF' : '0A0A1A/FF00FF'}?text=${encodeURIComponent(study.title)}`}
              alt={`${study.title} visual dossier`}
              className="mb-4 h-48 w-full object-cover border-2 border-jules-border-accent"
            />
          )}
          <PixelHeading as="h3" className="text-md text-jules-cyan mb-2">{study.title}</PixelHeading>
          <PixelText as="p" className="text-sm text-jules-text-light mb-3 font-bold">{study.clientName}</PixelText>
          <div className="space-y-4 text-sm text-jules-text-light flex-grow leading-relaxed">
            <div>
              <PixelHeading as="strong" className="block text-jules-yellow text-xs">Objective_</PixelHeading>
              <PixelText>{study.challenge}</PixelText>
            </div>
            <div>
              <PixelHeading as="strong" className="block text-jules-yellow text-xs">Strategy_</PixelHeading>
              <PixelText>{study.solution}</PixelText>
            </div>
            <div>
              <PixelHeading as="strong" className="block text-jules-yellow text-xs">Outcome_</PixelHeading>
              <PixelText>{study.results}</PixelText>
            </div>
          </div>
          {study.tags && study.tags.length > 0 && (
            <div className="mt-auto pt-4 border-t-2 border-jules-border">
              <PixelHeading as="h4" className="text-xs text-jules-text-light mb-2">Keywords_</PixelHeading>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="bg-black text-jules-magenta text-xs font-press-start px-2 py-1 border border-jules-magenta/50">
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

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);

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
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-jules-bg/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="panel w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden !border-jules-cyan shadow-neon-cyan" // Emphasize modal
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 md:p-5 border-b-2 border-jules-border-accent sticky top-0 bg-jules-bg-panel z-10">
          <PixelHeading as="h2" id="modal-title" className="text-lg text-jules-cyan">
            {title}
          </PixelHeading>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-1 text-jules-text-light hover:text-jules-magenta focus:outline-none focus:ring-2 ring-offset-2 ring-offset-jules-bg-panel focus:ring-jules-magenta"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <div className="p-5 md:p-6 overflow-y-auto flex-grow">
          <div className="prose prose-sm sm:prose-base max-w-none 
                          text-jules-text-light font-vt323 leading-relaxed 
                          prose-headings:font-press-start prose-headings:text-jules-yellow prose-headings:mb-3 prose-headings:mt-5
                          prose-strong:text-jules-cyan prose-strong:font-bold
                          prose-a:text-jules-magenta hover:prose-a:text-jules-yellow
                          prose-p:mb-3
                          whitespace-pre-line">
            {children}
          </div>
        </div>
        <footer className="p-4 border-t-2 border-jules-border-accent sticky bottom-0 bg-jules-bg-panel z-10 text-right">
          <RetroButton onClick={onClose} variant="secondary" size="sm">
            [ Close ]
          </RetroButton>
        </footer>
      </div>
    </div>
  );
};

const InsightCard = ({ insight, onReadMore }) => (
  <article className="panel flex flex-col h-full"> {/* Apply panel style */}
    <PixelHeading as="h4" className="text-md text-jules-cyan mb-2">{insight.title}</PixelHeading>
    <PixelText as="p" className="text-xs text-jules-text-light mb-1">
      Published: {insight.date}
      {insight.author && ` // Author: ${insight.author}`}
    </PixelText>
    <PixelText as="p" className="text-sm text-jules-text-light mb-4 flex-grow leading-relaxed">{insight.summary}</PixelText>
    {insight.tags && insight.tags.length > 0 && (
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {insight.tags.map((tag) => (
            <span key={tag} className="bg-black text-jules-yellow text-xs font-press-start px-2 py-1 border border-jules-yellow/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
    <RetroButton variant="secondary" size="sm" onClick={onReadMore} className="mt-auto" aria-label={`Access dossier: ${insight.title}`}>
      Read Dossier &gt;
    </RetroButton>
  </article>
);

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
        <div className="text-center text-jules-text-light py-8">
          <PixelText as="p">&lt;No intel briefings available&gt;</PixelText>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} onReadMore={() => handleReadMore(insight)} />
          ))}
        </div>
      )}
      <div className="text-center pt-10 mt-10 border-t-2 border-jules-border">
        <PixelHeading as="h3" className="text-lg text-jules-cyan mb-4">Request Uplink_</PixelHeading>
        <PixelText className="max-w-md mx-auto mb-6 text-base">
          Subscribe for classified intel drops and advanced strategy guides.
        </PixelText>
        <RetroButton variant="primary" onClick={() => alert("Uplink sequence initiated... (Newsletter Subscription Offline)")} aria-label="Subscribe for new insights">
          INITIATE SUBSCRIBE
        </RetroButton>
      </div>
      {selectedInsight && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={`// INTEL BRIEFING: ${selectedInsight.title}`}>
          {selectedInsight.fullContent || "<Transmission corrupted. Full data unavailable...>"}
        </Modal>
      )}
    </div>
  );
};

// --- DATA (Keep this or fetch from an external source) ---
const APP_TITLE = "StrategyAI Forge";
const NAV_ITEMS = [
  { label: "AI Interface", href: "#ai-tool" },
  { label: "Mission Logs", href: "#case-studies" },
  { label: "Doctrine", href: "#approach" },
  { label: "Intel", href: "#insights" },
];
const CASE_STUDIES_DATA = [
  {
    id: "wicked-skateboards", clientName: "Wicked Skateboards [NH Div.]", title: "Op: Engagement Matrix",
    challenge: "LocalNH unit 'Wicked Skateboards' reported low signal-to-noise ratio on social channels, failing to penetrate target demographic.",
    solution: "Deployed AI-driven content protocol for IG-channel. Gemini-Core tasked with ideation, caption generation, hashtag-vectoring. Strategy integrated product showcases, geo-tagged reconnaissance (local skate spots), and community ops.",
    results: "Achieved 40% uplift in IG-channel engagement; 25% operative (follower) growth in cycle 1. Unit reports increased field contacts referencing comms array.",
    tags: ["Social Comms", "AI Content Gen", "Community Ops", "Local Unit Support"],
    imageUrl: "https://placehold.co/600x400/030310/39FF14?text=Op%3AEngagement+Matrix"
  },
  {
    id: "startup-automation", clientName: "Innovators Swarm [Tech Div.]", title: "Op: Autonomous Relay",
    challenge: "Expanding tech unit required automation of operative-contact nurturing and comms relays to manage increased signal volume without expanding personnel.",
    solution: "System audit of existing comms protocols identified key automation vectors. Deployed email relay platform with automated workflows for operative segmentation, drip-feed indoctrination sequences, and performance telemetry. AI-Core utilized for comms personalization.",
    results: "Reduced manual load on comms relay by 60%. Uplifted operative conversion by 15% via targeted nurturing. Clear telemetry established for protocol monitoring.",
    tags: ["Marketing Automation", "Comms Relay", "Operative Nurturing", "AI Personalization"],
    imageUrl: "https://placehold.co/600x400/030310/FF00FF?text=Op%3AAutonomous+Relay"
  }
];
const INSIGHTS_DATA = [
   {
    id: "ai-content-future", title: "Intel Drop: The AI Content Singularity",
    summary: "Analysis of AI's impact on content creation, memetic personalization, and signal distribution. Directive: Leverage AI for superior content strategy in the evolving datasphere.",
    date: "Cycle 7, Day 283", author: "Oracle-7",
    tags: ["AI", "Content Warfare", "PsyOps", "Innovation", "Future Systems"],
    fullContent: `**CLASSIFIED INTEL // FORGE EYES ONLY**

SUBJECT: The AI Content Singularity - Strategic Implications

1.  **Enhanced Content Generation Matrix:**
    AI protocols now capable of ideation, draft-gen, SEO vectoring, and multi-platform content replication. This accelerates content lifecycle, freeing human assets for high-level strategy & creative ops. All comms channels (blogs, social relays, product specs) can achieve baseline consistency.

2.  **Hyper-Personalization at Scale (Project CHIMERA):**
    Operative preference is paramount. AI algorithms analyze behavioral data, demographic markers, and interaction logs to deliver tailored content experiences. Objective: Right signal, right operative, right cycle-time. Increases engagement & conversion vectors. Anticipate adaptive web-fronts & individually-vectored email comms.

3.  **Optimized Signal Distribution (Project ECHO):**
    AI determines optimal channels & timings for max signal propagation. Platform performance analysis, trend prediction, automated posting schedules. AI assists in operative-of-influence ID & ad-spend optimization.

4.  **Data-Driven Telemetry & Performance Feedback:**
    Content performance metrics analyzed by AI provide actionable intel on signal resonance. Enables continuous refinement of content doctrine, ensuring alignment with mission objectives & operative expectations.

**STRATEGIC DIRECTIVE: EMBRACE THE AI REVOLUTION**
Competitive viability requires AI integration. This augments, not replaces, human creativity. Symbiotic relationship: AI handles data ops & repetitive tasks; human assets focus on strategic thought, narrative crafting, & genuine operative connection. Ethical parameters & data integrity protocols remain priority Alpha. Transformative potential is undeniable.

**END TRANSMISSION**`
  },
  {
    id: "automation-roi-maximization", title: "Directive: Maximize ROI via Automation",
    summary: "Field manual for effective marketing automation deployment & ROI measurement. From email sequences to lead-value assessment, achieve system efficiency & sustainable growth.",
    date: "Cycle 7, Day 201", author: "Unit 404",
    tags: ["System Automation", "ROI", "Efficiency", "Lead Indoctrination", "Email Protocol"],
    fullContent: `**FIELD MANUAL // AUTOMATION PROTOCOL ROI-7**

SUBJECT: Maximizing Return on Investment via Marketing Automation

1.  **Define Mission Objectives (SMART Protocol):**
    Prior to system integration, define clear outcomes. Increased lead acquisition? Enhanced conversion rates? Improved operative retention? Reduced manual load? Goals must be Specific, Measurable, Achievable, Relevant, Time-bound.

2.  **Operative Journey Mapping & Segmentation:**
    Map operative journey to ID touchpoints for automation value-add. Segment operatives (demographics, behavior, engagement) for targeted, relevant automated comms.

3.  **Select Optimal Tooling:**
    Choose automation platform aligned with current needs & projected resource allocation. Key features: email protocol, lead management, CRM sync, telemetry, scalability. Initiate with core functions; expand as unit grows.

4.  **Implement Key Automation Sequences:**
    - **Acquisition Protocol (Welcome):** Automate initial comms for new subscribers/operatives.
    - **Indoctrination Campaigns (Lead Nurturing):** Drip-feed intel to guide leads through conversion funnel.
    - **Asset Recovery (Abandoned Cart):** For e-commerce units, auto-ping operatives on abandoned acquisitions.
    - **Lead Prioritization (Scoring):** Assign value scores based on engagement/demographics for sales-asset follow-up.
    - **Post-Acquisition Engagement:** Follow-up post-conversion to encourage repeat ops & gather intel.

5.  **Personalize Transmissions:**
    Leverage intel for personalized automated messaging. Use dynamic content, merge tags, behavioral triggers. Objective: Reduce signal noise, increase relevance.

6.  **Test, Analyze, Optimize (Project ITERATE):**
    Continuously monitor workflow performance. A/B test variables (subject lines, content, CTAs). Utilize telemetry for actionable insights. Refine strategy based on data.

7.  **System Integration (Project NEXUS):**
    Ensure seamless sync between automation platform, CRM, sales tools, & other relevant systems for unified operative view & improved efficiency.

Adherence to these protocols will transition units from tool-users to strategic automation leverages, yielding significant ROI and outcome improvement.

**END MANUAL**`
  }
];


function App() {
  // A simple ASCII art animation for the header
  const [logoFrame, setLogoFrame] = useState(0);
  const logoFrames = [
    "S T R A T E G Y",
    "[STRATEGY]",
    "S.T.R.A.T.E.G.Y",
    "STRATEGY_AI",
    "STRATEGY.AI.FORGE"
  ];
   useEffect(() => {
    const interval = setInterval(() => {
      setLogoFrame((prevFrame) => (prevFrame + 1) % logoFrames.length);
    }, 750); // Change frame every 750ms
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen flex flex-col"> {/* Main background is on body via index.css */}
      <AppHeader title={logoFrames[logoFrame]} navItems={NAV_ITEMS} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <Section 
          id="ai-tool" 
          title="> AI_STRATEGY_INTERFACE_" 
          className="mb-12"
          titleClassName="text-jules-text-green"
        >
          <GeminiQuery />
        </Section>

        <Section 
          id="case-studies" 
          title="> MISSION_LOGS // ARCHIVES" 
          className="mb-12"
          titleClassName="text-jules-magenta"
        >
          <CaseStudies studies={CASE_STUDIES_DATA} />
        </Section>

        <Section 
          id="approach" 
          title="> THE_FORGE // DOCTRINE" 
          className="mb-12"
          titleClassName="text-jules-yellow"
        >
          <div className="panel space-y-6 text-jules-text-light text-lg leading-relaxed max-w-3xl mx-auto text-left">
            <PixelText>
              <PixelHeading as="span" className="text-jules-cyan text-xl block mb-2">SYSTEM_ONLINE:</PixelHeading>
              Welcome to {APP_TITLE}! We specialize in crafting AI-powered marketing and automation strategies to elevate your brand and streamline your operations. Unit designation: Information & Strategy.
            </PixelText>
            <PixelText>
              Our approach is collaborative and results-driven. We combine deep expertise in emerging technologies like Google's Gemini API with proven marketing principles to deliver innovative solutions tailored to your unique business needs. All protocols optimized for maximum efficiency.
            </PixelText>
            <PixelText>
              Whether you're looking to generate creative content, automate repetitive tasks, or gain deeper insights from your data, we're here to help you navigate the evolving digital landscape and achieve sustainable growth. Query a solution.
            </PixelText>
            <PixelText>
              Access the <a href="#ai-tool" className="text-jules-accent-neon hover:underline">AI Strategy Interface</a> for tactical ideation, or browse our <a href="#case-studies" className="text-jules-accent-neon hover:underline">Mission Logs</a> to observe prior operational success.
            </PixelText>
          </div>
        </Section>

        <Section 
          id="insights" 
          title="> DATA_STREAMS // INTEL_BRIEFINGS"
          titleClassName="text-jules-text-green"
        >
          <InsightsSection insights={INSIGHTS_DATA} />
        </Section>
      </main>

      <footer className="bg-jules-bg-header border-t-2 border-jules-border-accent py-6 text-center">
        <PixelText as="p" className="text-jules-text-light text-sm mb-1">
          © {new Date().getFullYear()} {APP_TITLE} // Sector AI-MAR-AUT // All Rights Reserved
        </PixelText>
        <PixelText as="p" className="text-jules-magenta text-xs mt-1">
          INITIATE_CONTACT // BUILD_FUTURE // END_OF_LINE<span className="blinking-cursor"></span>
        </PixelText>
      </footer>
    </div>
  );
}

export default App;