import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { GeminiQuery } from './components/GeminiQuery';
import { CaseStudies } from './components/CaseStudies';
import { Insights } from './components/Insights';
import { ArcadeText } from './components/ArcadeText';
import { APP_TITLE, NAV_ITEMS, CASE_STUDIES_DATA, INSIGHTS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-consultancy-bg">
      <Header title={APP_TITLE} navItems={NAV_ITEMS} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <Section id="ai-tool" title="AI STRATEGY TOOL">
          <GeminiQuery />
        </Section>

        <Section id="case-studies" title="SUCCESS STORIES">
          <CaseStudies studies={CASE_STUDIES_DATA} />
        </Section>

        <Section id="approach" title="OUR APPROACH">
          <div className="space-y-6 text-consultancy-text leading-relaxed max-w-3xl mx-auto">
            <p>
              Welcome to <ArcadeText as="span" className="text-consultancy-highlight">{APP_TITLE}</ArcadeText>! We specialize in crafting AI-powered marketing and automation strategies to elevate your brand and streamline your operations.
            </p>
            <p>
              Our approach is collaborative and results-driven. We combine deep expertise in emerging technologies like Google's Gemini API with proven marketing principles to deliver innovative solutions tailored to your unique business needs.
            </p>
            <p>
              Whether you're looking to generate creative content, automate repetitive tasks, or gain deeper insights from your data, we're here to help you navigate the evolving digital landscape and achieve sustainable growth.
            </p>
             <p>
              Explore our AI Strategy Tool to get instant ideas, or browse our case studies to see the tangible impact we've made for businesses like yours.
            </p>
          </div>
        </Section>

        <Section id="insights" title="LATEST INSIGHTS">
          <Insights insights={INSIGHTS_DATA} />
        </Section>
      </main>

      <footer className="bg-consultancy-bg-alt border-t border-consultancy-border py-8 text-center">
        <p className="text-consultancy-text-muted text-sm">
          &copy; {new Date().getFullYear()} {APP_TITLE}. AI-Powered Marketing & Automation.
        </p>
        <p className="text-consultancy-text-muted text-xs mt-1">
          Let's build the future of your business, together.
        </p>
      </footer>
    </div>
  );
};

export default App;