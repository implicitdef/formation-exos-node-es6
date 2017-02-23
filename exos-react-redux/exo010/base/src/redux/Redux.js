import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import columns from "./ducks/columns";
import user from "./ducks/user";
import {fetchColumns} from "./ducks/columns";
import {fetchUser} from "./ducks/user";
import thunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  columns,
  user
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
store.dispatch(fetchUser(1));