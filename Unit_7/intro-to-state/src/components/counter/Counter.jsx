import "./Counter.css";
export default function Counter({ count, setCount }) {
  // setCount( ) is triggering a re-render and will not display until after the process is complete.
  function increaseNum() {
    // An example of how to use prevState with prevCount
    // This allows us to view the previous value within the count variable and run the process like before.
    setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);

    // setCount(count + 1);
  }

  function decreaseNum() {
    setCount((prevCount) => prevCount - 1);

    // setCount(count - 1);
  }
  return (
    <div className="counter">
      Counter: <br />
      <button onClick={decreaseNum}>-</button>
      <span>{count}</span>
      <button onClick={increaseNum}>+</button>
      {/* {console.log(newNum)} */}
    </div>
  );
}
