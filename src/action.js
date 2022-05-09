const incrementAction = {
  type: "increment-count"
};
const decrementAction = {
  type: "decrement-count"
};
const setCounterAction = (num) => ({
  type: "set-count",
  payload: num
});

export { incrementAction, decrementAction, setCounterAction };
