import { useEffect, useState } from "react";

const Double = ({ count }) => {
  const [double, setDouble] = useState(count);
  useEffect(() => {
    setDouble(count * 2);
  }, [count]);
  return (
    <div className="main-border">
      Double Component <br />
      Double: {double}
    </div>
  );
};

export default Double;
