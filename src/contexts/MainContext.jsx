import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const [choosedProducts, setChoosedProducts] = useState([]);
  const [sumPrices, setSumPrices] = useState(0);

  return (
    <MainContext.Provider
      value={{
        choosedProducts,
        setChoosedProducts,
        sumPrices,
        setSumPrices,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
