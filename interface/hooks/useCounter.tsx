import React, { createContext, useContext, useState } from "react";

const Context = createContext<number>(0);

const useCounter = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  const [count, setCount] = useState(context);

  return [count, setCount] as const;
}

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={count}>
      {children}
    </Context.Provider>
  );
};

export { useCounter, CounterProvider };
