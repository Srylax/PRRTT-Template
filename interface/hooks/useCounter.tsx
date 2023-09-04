import React, { createContext, useContext, useState } from "react";

const Context = createContext<number>(0);

const useCounter = () => useContext(Context);

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={count}>
      {children}
    </Context.Provider>
  );
};

export { useCounter, CounterProvider };
