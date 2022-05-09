import "./styles.css";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./action";
import Dec from "./Dec";

function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      counter: {props.count}
      <button
        onClick={() => {
          props.incrementCount();
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          props.decrementCount();
        }}
      >
        decrement
      </button>
      <Dec />
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch, state) => ({
  incrementCount: () => {
    dispatch(incrementAction);
  },
  decrementCount: () => {
    dispatch(decrementAction);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
