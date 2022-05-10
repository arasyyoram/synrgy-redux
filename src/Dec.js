import { useDispatch } from "react-redux";
import { decrementAction, setCounterAction } from "./action";
import { useState } from "react";

function Decrement(props) {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    // console.log(parseInt(input));
    // props.set(input);
    dispatch(setCounterAction(input));
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(decrementAction);
        }}
      >
        decrement
      </button>
      <form onSubmit={formHandler}>
        <input onChange={inputHandler} />
        <button>submit</button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = (dispatch, state) => ({
//   decrementCount: () => {
//     dispatch(decrementAction);
//   },
//   set: (num) => {
//     dispatch(setCounterAction(num));
//   }
// });

export default Decrement;
