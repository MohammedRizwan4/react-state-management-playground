import { createContext, useContext, useEffect, useState } from "react";

const CountContext = createContext({
  count: 0,
  double: 0,
  increment: () => {},
});

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2);
  }, [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <CountContext.Provider value={{ count, double, increment }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCountContext = () => useContext(CountContext);

export default CountProvider;
