import React, { useContext } from "react";
import AppContext from "../contexts";

export default function Parte2() {
  const { nCliques, setnCliques } = useContext(AppContext);
  return (
    <button onClick={() => setnCliques(nCliques + 1)}>Soma 1</button>
  );
}
