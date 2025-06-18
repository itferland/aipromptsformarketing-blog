[![Netlify Status](https://api.netlify.com/api/v1/badges/<BADGE_ID>/status)](https://app.netlify.com/sites/<SITE_NAME>/deployments)
AI Solutions Consulting
Unlock your brand's full potential with AI-powered automation and engineering excellence.

Our Approach
We seamlessly blend automation, AI, and practical systems thinking. Our process includes audit, design, rapid prototyping, and iteration—always hands-on and vendor-neutral. No bloat, no BS, just results.

Case Studies
Project Chimera: Enhanced data processing pipelines for a Fortune 500 company, achieving a 300% efficiency boost with AI and n8n automation.

Operation Neon: Developed a predictive analytics platform that increased e-commerce sales by 40% through AI-driven customer experiences.

Quantum Leap Solutions: Implemented advanced NLP solutions for customer support automation, reducing response times by 75%.

Cybernetic Dreams Inc.: Pioneered a visual inspection system using computer vision, cutting manufacturing defect rates by 90%.

Stay Updated
Catch the latest AI & tech news and insights on our blog.

Contact
Connect via LinkedIn, X (@aisolutionsconsulting), or email: contact@aisolutionsconsulting.net.

Environment Variables
To run this project locally, create a `.env` file in the repository root with the following keys:

```
VITE_GEMINI_API_KEY=your_client_side_key
GEMINI_API_KEY_SERVER=your_server_side_key
NEWS_API_KEY=your_newsapi_key
```

### Sitemap Generation

Run `npm run sitemap` to create `public/sitemap.xml` and update `public/robots.txt` with the sitemap URL. Submit this file to search engines to improve indexing.

The script scans `src/pages` for `.tsx` files and automatically updates the list of URLs. Run it again whenever you add or rename a page to keep the sitemap current.

### Installation

Before running the build or development server, install dependencies with:

```bash
npm install
```

Then you can start a dev server using `npm run dev` or create a production build with `npm run build` (also used by Netlify, see [`netlify.toml`](netlify.toml)).

