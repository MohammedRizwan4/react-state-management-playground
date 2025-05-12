import { useAtom } from "jotai";
import { count } from "./store";

const Double = () => {
  const [c] = useAtom(count);
  const double = c * 2;
  return (
    <div className="main-border">
      Double Component <br />
      Double: {double}
    </div>
  );
};

export default Double;
