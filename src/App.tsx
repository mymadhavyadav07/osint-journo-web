import React from 'react';
import Home from './pages/Home';

function App() {
  // Update the document title
  React.useEffect(() => {
    document.title = "OSINT-JOURNO | Community for Investigative Journalists";
  }, []);

  return <Home />;
}

export default App;