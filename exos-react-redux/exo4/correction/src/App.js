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

  constructor(props){
    super(props);
    this.state = { isTitleVisible : true };
  }

  toggleTitle = () => {
    this.setState((state) => ({
      isTitleVisible : ! state.isTitleVisible
    }));
  };

  render() {
    return <div className="myDiv">
      <Title visible={this.state.isTitleVisible} name="Max" className="hello"/>
      <NamesList names={["George", "Suzie", "Fred"]}/>
      <Button onClick={this.toggleTitle}/>
    </div>;
  }
}

export default App;
