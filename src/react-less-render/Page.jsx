import { useState } from "react";
import Count from "./Count";
import Double from "./Double";
import Inc from "./Inc";

export const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main-border">
      Page Component <br />
      <Count count={count} />
      <Double count={count} />
      <Inc count={count} setCount={setCount} />
    </div>
  );
};
