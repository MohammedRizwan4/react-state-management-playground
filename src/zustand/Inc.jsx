import { useIncrement } from "./store";

const Inc = () => {
  const increase = useIncrement();
  return (
    <div className="main-border">
      Inc Component <br />
      <button onClick={increase}>Increment</button>
    </div>
  );
};

export default Inc;
