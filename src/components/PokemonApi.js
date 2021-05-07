import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PokemonApi extends Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => this.setState({ pokemon: data.results }));
  }
  render() {
    return (
      <div>
        {this.state.pokemon.map((p) => (
          <p>
            <Link to={`/pokemon/api/${p.url.split("/").slice(-2)[0]}`}>
              {p.name}
            </Link>
          </p>
        ))}
      </div>
    );
  }
}
