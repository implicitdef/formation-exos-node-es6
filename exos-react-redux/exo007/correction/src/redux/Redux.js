import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import columns from "./ducks/columns";

const reducer = combineReducers({
  columns
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// au démarrage de l'app
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware()
  )
);