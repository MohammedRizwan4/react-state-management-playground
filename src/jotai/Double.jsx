import { useDouble } from "./store";

const Double = () => {
  const double = useDouble();
  return (
    <div className="main-border">
      Double Component <br />
      Double: {double}
    </div>
  );
};

export default Double;
