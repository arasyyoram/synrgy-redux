const initialState = {
  list: [],
  loading: false,
  error: ""
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "post/fetch-start":
      return {
        ...state,
        loading: true
      };
    case "post/fetch-success":
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: ""
      };
    case "post/fetch-failed":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
