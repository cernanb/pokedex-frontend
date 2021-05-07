import React, { Component } from "react";
import { createPokemon } from "../redux/actions/pokemonActions";
import { connect } from "react-redux";

class PokemonForm extends Component {
  state = {
    name: "",
    height: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPokemon(this.state, this.props.history);
    // this.props.history.push("/pokemon");
  };

  render() {
    return (
      <div>
        <h1>Create a pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPokemon })(PokemonForm);
