import { useCountContext } from "./CountProvider";

const Inc = () => {
  const { increment } = useCountContext();
  return (
    <div className="main-border">
      Inc Component <br />
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
};

export default Inc;
