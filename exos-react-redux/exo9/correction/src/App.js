import React, { Component } from 'react';
import './App.css';
import ConnectedTrelloBoard from "./components/ConnectedTrelloBoard";
import ConnectedUserBlock from "./components/ConnectedUserBlock";
import {store} from "./redux/Redux";
import * as user from "./redux/ducks/user";
import {Provider} from "react-redux";
import { Router, Route, Redirect, browserHistory } from 'react-router'

const onEnterUserRoute = (nextState, replace, callback) => {
  const userId = nextState.params.id;
  store.dispatch(user.fetchUser(userId))
    .catch(err => {
      if (err.response.status == 404){
        replace("/");
      }
    })
    .then(() => callback());
};


class App extends Component {

  render() {
    return <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={ConnectedTrelloBoard}/>
        <Route path="user/:id" component={ConnectedUserBlock} onEnter={onEnterUserRoute}/>
        <Redirect from="*" to="/"/>
      </Router>
    </Provider>;
  }
}

export default App;
