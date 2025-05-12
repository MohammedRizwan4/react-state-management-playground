import { useAtom } from "jotai";
import { count } from "./store";

const Inc = () => {
  const [c, setC] = useAtom(count);
  return (
    <div className="main-border">
      Inc Component <br />
      <button onClick={() => setC(c + 1)}>Increment</button>
    </div>
  );
};

export default Inc;
