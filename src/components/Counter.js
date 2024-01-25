import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({
      type: "IncrementBy5",
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: "DecrementBy5",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>IncrementBy5</button>
      <button onClick={decrementHandler}>DecrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
