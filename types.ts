export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  imageUrl?: string; // Optional image for the case study
  tags?: string[];
}

export interface Insight {
  id: string;
  title: string;
  summary: string;
  date: string; // e.g., "November 15, 2023"
  slug: string; // for future routing/linking, e.g., "ai-in-content-marketing"
  author?: string; // Optional
  tags?: string[];
  fullContent?: string; // Full content for the modal
}

// Add more shared types here as needed