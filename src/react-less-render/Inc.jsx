const Inc = ({ count, setCount }) => {
  return (
    <div className="main-border">
      Inc Component <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Inc;
