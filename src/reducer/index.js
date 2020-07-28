const initialState = {
  allGames: [1, 2, 3, 4, 5],
  message: "",
};

export const gameReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "MAP":
      return { ...state, allGames: "this" };

    default:
      return state;
  }
};