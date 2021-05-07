import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonForm from "./components/PokemonForm";
import PokemonApi from "./components/PokemonApi";
import PokemonApiShow from "./components/PokemonApiShow";

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
        <Route exact path="/pokemon/api" component={PokemonApi} />
        <Route path="/pokemon/api/:id" component={PokemonApiShow} />
      </Switch>
    </div>
  );
}

export default App;
