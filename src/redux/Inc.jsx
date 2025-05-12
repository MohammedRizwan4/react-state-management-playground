import { useDispatch } from "react-redux";
import { incremented } from "./store";

const Inc = () => {
  const dispatch = useDispatch();
  return (
    <div className="main-border">
      Inc Component <br />
      <button onClick={() => dispatch(incremented())}>Increment</button>
    </div>
  );
};

export default Inc;
