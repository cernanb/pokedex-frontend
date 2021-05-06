import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonForm from "./components/PokemonForm";

// / - Home
// /pokemon - PokemonList
// /pokemon/new - PokemonForm
// /pokemon/api - PokemonApi
// /pokemon/:id - PokemonShow

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon" component={PokemonList} />
        <Route path="/pokemon/new" component={PokemonForm} />
      </Switch>
    </div>
  );
}

export default App;
