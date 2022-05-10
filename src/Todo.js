import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./action";

const Todo = () => {
  const [input, setInput] = useState("");

  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addTodo(input));
    setInput("");
  };

  const deleteHandler = (id) => {
    console.log(id);
    const filteredTodo = todo.filter((item) => {
      return todo.indexOf(item) !== id;
    });
    dispatch(deleteTodo(filteredTodo));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {todo.map((item, index) => (
          <>
            <li key={index}>
              {item}
              <button
                onClick={() => {
                  deleteHandler(index);
                }}
              >
                delete
              </button>
            </li>
          </>
        ))}
      </div>
      <form onSubmit={formHandler}>
        <input onChange={inputHandler} value={input} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Todo;
