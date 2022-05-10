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

const addTodo = (todo) => ({
  type: "todo/add",
  payload: todo
});

export { incrementAction, decrementAction, setCounterAction, addTodo };
