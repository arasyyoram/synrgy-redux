import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./action";

const Todo = () => {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");

  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (edit) {
      const editIndex = todo.findIndex((item) => {
        return item === edit;
      });
      const copyTodo = [...todo];
      copyTodo[editIndex] = input;
      console.log(copyTodo);
      dispatch(deleteTodo(copyTodo));
      setInput("");
      setEdit("");
      return;
    }

    dispatch(addTodo(input));
    setInput("");
  };

  const deleteHandler = (id) => {
    const filteredTodo = todo.filter((item) => {
      return todo.indexOf(item) !== id;
    });
    dispatch(deleteTodo(filteredTodo));
  };

  const editHandler = (item) => {
    setInput(item);
    setEdit(item);
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
                  editHandler(item);
                }}
              >
                edit
              </button>
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
