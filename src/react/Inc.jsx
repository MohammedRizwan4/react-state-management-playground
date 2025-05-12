const Inc = ({ count, setCount }) => {
  return (
    <div className="main-border">
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Inc;
