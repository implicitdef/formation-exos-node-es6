import React, { Component } from 'react';
import './App.css';
import TrelloBoard from "./components/TrelloBoard";

class App extends Component {

  render() {
    const boardProps = {
      name : "My board",
      columns : [{
        id : 1,
        name : "Later",
        tasks : [{
          id: 1,
          text : "Buy plane tickets"
        },
        {
          id: 2,
          text : "Call mom"
        }]
      }, {
        id : 2,
        name : "Today",
        tasks : [{
          id: 3,
          text : "Send email to Lucy"
        },
        {
          id: 4,
          text : "Buy groceries"
        },
        {
          id: 5,
          text : "Go to the gym"
        }]
      }],
      onDeleteTask : (id) => {
        console.log(`Deleting task ${id}`);
      },
      onDeleteColumn : (id) => {
        console.log(`Deleting column ${id}`);
      },
      onTaskAdd : (text, columnId) => {
        console.log(`Adding a task in column ${columnId} : ${text}`);
      },
      onColumnAdd : (name) => {
        console.log(`Adding a column : ${name}`);
      }
    };
    return <TrelloBoard {...boardProps}/>;
  }
}

export default App;
