import axios from "axios";

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
const deleteTodo = (todo) => ({
  type: "todo/delete",
  payload: todo
});

const fetchPostStart = {
  type: "post/fetch-start"
};

const fetchPostSuccess = (payload) => ({
  type: "post/fetch-success",
  payload: payload
});

const fetchPostFailed = (payload) => ({
  type: "post/fetch-failed",
  payload
});

// redux thunk middleware
const fetchPostAsync = () => {
  return function (dispatch, getState) {
    dispatch(fetchPostStart);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch(fetchPostSuccess(res.data));
        // console.log(getState().post)
      })
      .catch((err) => {
        dispatch(fetchPostFailed(err));
      });
  };
};

export {
  incrementAction,
  decrementAction,
  setCounterAction,
  addTodo,
  deleteTodo,
  fetchPostAsync
};
