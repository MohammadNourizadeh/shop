import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const [choosedProducts, setProducts] = useState([]);

  return (
    <MainContext.Provider
      value={{
        choosedProducts,
        setProducts,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
