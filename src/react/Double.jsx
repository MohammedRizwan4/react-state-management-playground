import { useEffect, useState } from "react";

const Count = ({ count }) => {
  const [double, setDouble] = useState(count);
  useEffect(() => {
    setDouble(count * 2);
  }, [count]);
  return <div className="main-border">Double: {double}</div>;
};

export default Count;
