import React, { createContext, useState } from "react";

//1-create context
const ColorContext = createContext();
//2-create provider

//6-update data in context
const ContextProvider = ({ children }) => {
  const [data, setData] = useState("red");
  const changeData = (color) => {
    setData(color);
  };
  return (
    <ColorContext.Provider value={{ data, changeData }}>
      {children}
    </ColorContext.Provider>
  );
};

//3- export context--> to use, provider --> to wrap all component
export { ContextProvider, ColorContext };
