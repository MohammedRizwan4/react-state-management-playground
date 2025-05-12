import { useCount } from "./store";

const Count = () => {
  const count = useCount();
  return (
    <div className="main-border">
      Count Component <br />
      Count: {count}
    </div>
  );
};

export default Count;
