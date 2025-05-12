import { useState } from "react";
import Count from "./Count";
import Double from "./Double";
import Inc from "./Inc";

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main-border">
      Count: {count}
      <Count count={count} />
      <Double count={count} />
      <Inc count={count} setCount={setCount} />
    </div>
  );
};

export default Page;
