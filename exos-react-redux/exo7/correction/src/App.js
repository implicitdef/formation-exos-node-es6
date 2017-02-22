import React, { Component } from 'react';
import './App.css';
import ConnectedTrelloBoard from "./components/ConnectedTrelloBoard";
import {store} from "./redux/Redux";
import {Provider} from "react-redux";
class App extends Component {

  render() {
    return <Provider store={store}>
      <ConnectedTrelloBoard/>
    </Provider>;
  }
}

export default App;
