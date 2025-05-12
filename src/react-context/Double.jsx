import { useCountContext } from "./CountProvider";

const Double = () => {
  const { double } = useCountContext();
  return (
    <div className="main-border">
      Double Component <br />
      Double: {double}
    </div>
  );
};

export default Double;
