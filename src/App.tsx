// src/App.tsx
import FloatingMenu from "./components/FloatingMenu";
import SuccessStories from "./components/SuccessStories";
import MainApp from "./components/MainApp";

export default function App() {
  return (
    <div className="relative min-h-screen bg-jules-bg text-jules-text-light overflow-x-hidden">
      <MainApp />
      <FloatingMenu />
      <div className="z-10 relative">
        <SuccessStories />
      </div>
    </div>
  );
}
