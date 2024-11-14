import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const [choosedProducts, setChoosedProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState(0);

  return (
    <MainContext.Provider
      value={{
        choosedProducts,
        setChoosedProducts,
        totalPrices,
        setTotalPrices,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
