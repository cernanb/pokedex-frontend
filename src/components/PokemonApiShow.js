import React, { Component } from "react";

export default class PokemonApiShow extends Component {
  state = {
    pokemon: {},
  };
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
      .then((res) => res.json())
      .then((data) => this.setState({ pokemon: data }));
  }

  render() {
    return (
      <div>
        <h1>Show Page from Api</h1>
        Name: {this.state.pokemon.name}
      </div>
    );
  }
}
