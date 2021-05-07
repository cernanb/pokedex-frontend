export const getPokemon = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_POKEMON_SUCCESS", payload: data })
      );
  };
};

export const createPokemon = (newPokemonData, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/pokemons", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemon: newPokemonData }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        dispatch({ type: "CREATE_POKEMON_SUCCESS", payload: data });
        history.push("/pokemon");
      })
      .catch((err) => dispatch({ type: "ERROR", payload: "" }));
  };
};
