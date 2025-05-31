import ASCIIDrift from "./components/ASCIIDrift";
import FlowNodesBackground from "./components/FlowNodesBackground";
import FloatingMenu from "./components/FloatingMenu";
import SuccessStories from "./components/SuccessStories";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Layer 0: ASCII Matrix Animation */}
      <ASCIIDrift />

      {/* Layer 1: n8n-style Flow Nodes and Connectors */}
      <FlowNodesBackground />

      {/* Layer 2: CRT Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 crt-scanlines"></div>

      {/* Layer 3: Main Content */}
      <main className="relative z-10 flex flex-col items-center px-2">
        {/* Hero Title with CRT Glow */}
        <h1 className="crt-text text-4xl md:text-5xl mb-4 mt-6 text-center">
          AI Solutions Consulting
        </h1>
        {/* Hero Subtitle */}
        <p className="mb-8 text-lg text-gray-200 max-w-2xl text-center">
          Unlock your brand's full potential with AI-powered automation<br />
          and pixel-perfect engineering.
        </p>
        {/* Floating Menu */}
        <FloatingMenu />
        {/* Success Stories Section */}
        <section className="w-full max-w-6xl mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center crt-text" style={{ color: "#fff", textShadow: "0 0 4px #00ff88, 0 0 18px #003300" }}>
            Success Stories
          </h2>
          <SuccessStories />
        </section>
      </main>
    </div>
  );
}
