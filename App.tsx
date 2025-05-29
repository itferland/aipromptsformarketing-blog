import { useEffect, useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard'; // Or your main component

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000); // Show welcome screen for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-jules-bg text-jules-text-light min-h-screen">
      {showWelcome ? <WelcomeScreen /> : <Dashboard />}
    </div>
  );
}

export default App;
