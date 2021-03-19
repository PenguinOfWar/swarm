import { useEffect, useState } from 'react';
import Boudica from '../../packages/boudica';

/**
 * summon boudica
 */

import './App.scss';

function App() {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      return;
    }

    const boudica = new Boudica();

    window.boudica = boudica;
    setRunning(true);
  }, [running]);

  return (
    <div className="app container">
      <div className="row">
        <div className="col-12">
          <h1>@swarm.ai/boudica</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
