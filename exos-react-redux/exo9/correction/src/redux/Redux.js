import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import columns from "./ducks/columns";
import {fetchColumns} from "./ducks/columns";
import thunkMiddleware from "redux-thunk";
const reducer = combineReducers({
  columns
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// au démarrage de l'app
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);




// do a fetch when the app start
store.dispatch(fetchColumns());