import { connect } from "react-redux";
import { decrementAction } from "./action";

function Decrement(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.decrementCount();
        }}
      >
        decrement
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, state) => ({
  decrementCount: () => {
    dispatch(decrementAction);
  }
});

export default connect(null, mapDispatchToProps)(Decrement);
