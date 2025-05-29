import { useState, useEffect } from 'react';
import WelcomeScreen from './src/components/WelcomeScreen';
import MainApp from './src/components/MainApp';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-jules-bg text-jules-text-light min-h-screen">
      {showWelcome ? <WelcomeScreen /> : <MainApp />}
    </div>
  );
}
