import './App.css';
import { useEffect, useState } from 'react';
import Parte1 from './components/Parte1';
import Parte2 from './components/Parte2';

function App() {
  const [nCliques1, setnCliques1] = useState(0);
  const [nCliques2, setnCliques2] = useState(0);
  const [nCliques3, setnCliques3] = useState(0);

  useEffect(() => {
    document.title = `Clicou ${nCliques1} vezes`
  });

  return (
    <div>
      <p>Clicou {nCliques1} vezes.<button onClick={()=> setnCliques1(nCliques1 + 1)}>Clique</button></p>
      <p>Clicou {nCliques2} vezes.<button onClick={()=> setnCliques2(nCliques2 + 1)}>Clique</button></p>
      <p>Clicou {nCliques3} vezes.<button onClick={()=> setnCliques3(nCliques3 + 1)}>Clique</button></p>
      <Parte1 />
      <Parte2 />
    </div>
  );
}

export default App;
