import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import pokemonReducer from "./reducers/pokemonReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
