import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      console.log('running', true);
      return;
    }

    console.log('starting');
    setRunning(true);
  }, [running]);

  return <div className="App">Gday mate</div>;
}

export default App;
