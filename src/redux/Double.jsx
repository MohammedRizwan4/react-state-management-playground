import { useCount } from "./store";

const Double = () => {
  const double = useCount();
  return (
    <div className="main-border">
      Double Component <br />
      Double: {double}
    </div>
  );
};

export default Double;
