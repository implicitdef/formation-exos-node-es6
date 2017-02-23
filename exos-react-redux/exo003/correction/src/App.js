import React, { Component } from 'react';
import './App.css';

const Title = ({visible, name, className}) => {
  return visible && <h1 className={className}>Hello {name}!</h1>;
};

const NamesList = ({names}) => {
  return <ul>
    {
      names.map((name, idx) => <li key={idx}>{name}</li>)
    }
  </ul>;
};

const Button = ({onClick}) => {
  return <button onClick={onClick}>Click me!</button>;
};

class App extends Component {
  render() {
    return <div className="myDiv">
      <Title visible={true} name="Max" className="hello"/>
      <NamesList names={["George", "Suzie", "Fred"]}/>
      <Button onClick={() => {console.log("Button clicked !");}}/>
    </div>;
  }
}

export default App;
