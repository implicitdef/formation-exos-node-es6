import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const params = {
      shouldDisplayTitle : true,
      titleClass : "hello",
      name : "Max",
      namesList : ["George", "Suzie", "Fred"],
      onButtonClick : () => {
        console.log("Button clicked !");
      }
    };
    return (
      <div className="myDiv">
        {
          params.shouldDisplayTitle &&
          <h1 className={params.titleClass}>Hello {params.name}!</h1>
        }
        <ul>
          {
            params.namesList.map((name, idx) => <li key={idx}>{name}</li>)
          }
        </ul>
        <button onClick={params.onButtonClick}>Click me!</button>
      </div>
    );
  }
}

export default App;
