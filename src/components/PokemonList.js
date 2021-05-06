import React, { Component } from "react";
import { getPokemon } from "../redux/actions/pokemonActions";
import { connect } from "react-redux";
import PokemonListItem from "./PokemonListItem";

class PokemonList extends Component {
  componentDidMount() {
    this.props.getPokemon();
  }
  render() {
    return (
      <div>
        <h1>Pokemon List</h1>
        {this.props.pokemon.map((p) => (
          <PokemonListItem pokemon={p} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};

export default connect(mapStateToProps, { getPokemon })(PokemonList);
