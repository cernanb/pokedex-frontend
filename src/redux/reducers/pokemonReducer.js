export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POKEMON_SUCCESS":
      return action.payload;
    case "CREATE_POKEMON_SUCCESS":
      return [...state, action.payload];
    default:
      return state;
  }
};
