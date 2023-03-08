import React, { useState, createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [data, setData] = useState(null);

  const value = {
    data,
    setData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
