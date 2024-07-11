import './App.css';
import React, { useEffect, useState } from 'react';
import Parte1 from './components/Parte1';
import Parte2 from './components/Parte2';
import getStarWarsPlanets from './fetch';

function App() {
  const [nCliques1, setnCliques1] = useState(0);
  const [nCliques2, setnCliques2] = useState(0);
  const [nCliques3, setnCliques3] = useState(0);
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    document.title = `Clicou ${nCliques1} vezes`;
  });

  useEffect(()=>{
    getStarWarsPlanets(setPlanetas);
  },[])

  console.log(planetas);

  return (
    <div>
      <p>Clicou {nCliques1} vezes.<button onClick={()=> setnCliques1(nCliques1 + 1)}>Clique</button></p>
      <p>Clicou {nCliques2} vezes.<button onClick={()=> setnCliques2(nCliques2 + 1)}>Clique</button></p>
      <p>Clicou {nCliques3} vezes.<button onClick={()=> setnCliques3(nCliques3 + 1)}>Clique</button></p>
      <Parte1 />
      <Parte2 />
      {planetas.map((p) => <div key={ p.name }>{p.name}</div> ) }
    </div>
  );
}

export default App;
