import React, { createContext, useContext, useState } from "react";
export const navContext = createContext();
function Navcontext({ children }) {
  const [NavOpen, IsNavOpen] = useState(false);
  return (
    <navContext.Provider value={{ NavOpen, IsNavOpen }}>
      {children}
    </navContext.Provider>
  );
}
export function MyAppContext() {
  return useContext(navContext);
}
export default Navcontext;
