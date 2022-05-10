const initialState = {
  todo: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/add":
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };
    default:
      return state;
  }
}
