import { useCountContext } from "./CountProvider";

const Count = () => {
  const { count } = useCountContext();
  return (
    <div className="main-border">
      Count Component <br />
      Count: {count}
    </div>
  );
};

export default Count;
