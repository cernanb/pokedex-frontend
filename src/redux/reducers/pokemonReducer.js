export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POKEMON_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
