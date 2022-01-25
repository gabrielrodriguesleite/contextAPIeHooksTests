import React, { useState } from "react";
import AppContext from "../contexts";

export default function AppProvider({children}) {
  const [nCliques, setnCliques] = useState(0);
  const contexto = { nCliques, setnCliques };
  return (
    <AppContext.Provider value={contexto}>
      {children}
    </AppContext.Provider>
  )
}
