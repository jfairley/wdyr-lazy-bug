import React, { useEffect, useState } from "react";

const Home = React.lazy(() => import("./Home"));

const App: React.FC = () => {
  // This simulates initializing application state.
  // In my application, I asynchronously load data from API and session-store to initialize redux.
  // Before redux is properly initialized, I don't want to render anything downstream.
  const [init, setInit] = useState(false);
  useEffect(() => {
    setTimeout(() => setInit(true), 500);
  }, []);
  if (!init) return null;

  // Now that the app is initialized, I can start rendering components.
  return <Home />;
};

export default App;
