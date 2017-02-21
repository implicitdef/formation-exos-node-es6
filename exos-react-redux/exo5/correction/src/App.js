import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/datepicker.css';


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

class MyDatePicker extends Component {

  componentDidMount(){
    $(this.target).datepicker();
  }

  render() {
    return <div ref={(c) => { this.target = c;}}>
    </div>;
  }

}


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
      <MyDatePicker/>
    </div>;
  }
}



export default App;
