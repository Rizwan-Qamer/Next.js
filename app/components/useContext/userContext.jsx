import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "vinod",
    age: 28,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};


export { AppContext, AppProvider };