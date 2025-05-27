import { NavItem, CaseStudy, Insight } from './types';

export const APP_TITLE = "StrategyAI Forge";

export const NAV_ITEMS: NavItem[] = [
  { label: "AI Strategy Tool", href: "#ai-tool" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Our Approach", href: "#approach" },
  { label: "Insights", href: "#insights" },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "wicked-skateboards",
    clientName: "Wicked Skateboards",
    title: "Boosting Engagement with AI-Driven Content",
    challenge: "Wicked Skateboards, a local NH skate shop, struggled to consistently create engaging social media content and reach a wider audience.",
    solution: "Developed a 30-day AI-powered content calendar focusing on Instagram. Leveraged Gemini to brainstorm post ideas, draft captions, and suggest relevant hashtags. Implemented a strategy that blended product showcases, local skate spots, and community engagement.",
    results: "Achieved a 40% increase in Instagram engagement, 25% follower growth in the first month. Client reported more customer interactions mentioning their online presence.",
    tags: ["Social Media Marketing", "AI Content Generation", "Community Engagement", "Local Business"],
    // imageUrl: "/images/wicked-skateboards-case-study.jpg" // Example image path
  },
  {
    id: "startup-automation",
    clientName: "Tech Innovators Inc.",
    title: "Streamlining Operations with Marketing Automation",
    challenge: "A growing tech startup needed to automate lead nurturing and email marketing campaigns to handle increasing volume without hiring more staff.",
    solution: "Audited existing marketing processes and identified key areas for automation. Implemented an email marketing platform with automated workflows for lead segmentation, drip campaigns, and performance tracking. Used AI to personalize email subject lines and content.",
    results: "Reduced manual effort in email marketing by 60%. Improved lead conversion rate by 15% through targeted nurturing. Provided clear dashboards for monitoring campaign performance.",
    tags: ["Marketing Automation", "Email Marketing", "Lead Nurturing", "AI Personalization"],
  }
];

export const INSIGHTS_DATA: Insight[] = [
  {
    id: "ai-content-future",
    title: "The Future of Content: How AI is Revolutionizing Strategy",
    summary: "Explore the transformative impact of artificial intelligence on content creation, personalization, and distribution. Learn how to leverage AI tools for a more effective content strategy in the modern digital landscape.",
    date: "November 20, 2023",
    slug: "future-of-content-ai-strategy",
    author: "Dr. Lex AI",
    tags: ["AI", "Content Marketing", "Strategy", "Innovation", "Future Tech"],
    fullContent: `
Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality reshaping industries, and content strategy is no exception. Its ability to process vast amounts of data, learn patterns, and generate human-like text is revolutionizing how businesses approach content creation, personalization, and distribution.

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
While there are ethical considerations and challenges to address, such as data privacy and the potential for bias, the transformative potential of AI in content marketing is undeniable.
    `,
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

By following these practical steps, businesses can move beyond simply using automation tools to strategically leveraging them for maximizing ROI and achieving significant improvements in their marketing and sales outcomes.
`
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
  },
];

export const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';