export const getPokemon = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_POKEMON_SUCCESS", payload: data })
      );
  };
};
