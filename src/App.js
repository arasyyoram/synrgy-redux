import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "./action";
import Dec from "./Dec";

function App(props) {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      counter: {counter}
      <button
        onClick={() => {
          dispatch(incrementAction);
        }}
      >
        increment
      </button>
      <Dec />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   count: state.count
// });

// const mapDispatchToProps = (dispatch, state) => ({
//   incrementCount: () => {
//     dispatch(incrementAction);
//   },
//   decrementCount: () => {
//     dispatch(decrementAction);
//   }
// });

export default App;
