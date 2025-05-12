import { useIncrement } from "./store";

const Inc = () => {
  const increment = useIncrement();
  return (
    <div className="main-border">
      Inc Component <br />
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Inc;
