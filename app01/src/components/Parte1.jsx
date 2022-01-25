import React, { useContext } from "react";
import AppContext from "../contexts";

export default function Parte1() {
  const { nCliques } = useContext(AppContext);
  return (
    <p>Mais cliques de outro botão {nCliques}</p>
  );
}
