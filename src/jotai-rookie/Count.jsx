import { useAtom } from "jotai";
import { count } from "./store";

const Count = () => {
  const [c] = useAtom(count);
  return (
    <div className="main-border">
      Count Component <br />
      Count: {c}
    </div>
  );
};

export default Count;
