# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

│
├── components/                       # App-specific React/Tailwind components
├── .env.local                        # **DO NOT COMMIT** – local secrets
├── .gitignore
├── App.tsx                           # Root React component
├── index.html                        # Vite entry HTML
├── index.tsx                         # Vite/React bootstrap
├── metadata.json                     # SEO / site-wide metadata
├── package.json                      # Dependencies & scripts
├── README.md
├── tsconfig.json                     # TypeScript config
└── vite.config.ts                    # Vite build-tool config
