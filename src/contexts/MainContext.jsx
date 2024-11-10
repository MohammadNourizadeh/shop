import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const [choosedProducts, setChoosedProducts] = useState([]);

  return (
    <MainContext.Provider
      value={{
        choosedProducts,
        setChoosedProducts,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
