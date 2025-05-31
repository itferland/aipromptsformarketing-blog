import ASCIIDrift from "./components/ASCIIDrift";
import FloatingMenu from "./components/FloatingMenu";
import SuccessStories from "./components/SuccessStories";
import MainApp from "./components/MainApp";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated ASCII Background */}
      <ASCIIDrift />

      {/* CRT scanlines overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 crt-scanlines"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center px-2">
        <h1 className="crt-text text-4xl md:text-5xl mb-4 mt-6 text-center">
          AI Solutions Consulting
        </h1>
        <p className="mb-8 text-lg text-gray-200 max-w-2xl text-center">
          Unlock your brand's full potential with AI-powered automation and pixel-perfect engineering.
        </p>

        {/* Floating Menu */}
        <FloatingMenu />

        {/* Success Stories Section */}
        <section className="w-full max-w-6xl mt-8">
          <SuccessStories />
        </section>
      </main>
    </div>
  );
}
