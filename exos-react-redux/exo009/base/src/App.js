import React, { Component } from 'react';
import './App.css';
import ConnectedTrelloBoard from "./components/ConnectedTrelloBoard";
import ConnectedUserBlock from "./components/ConnectedUserBlock";
import {store} from "./redux/Redux";
import {Provider} from "react-redux";


class App extends Component {

  render() {
    return <Provider store={store}>
      <div>
        <ConnectedTrelloBoard/>
        <ConnectedUserBlock/>
      </div>
    </Provider>;
  }
}

export default App;
