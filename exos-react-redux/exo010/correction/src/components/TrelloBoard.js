import React from "react";
import {Link} from "react-router";


const Task = ({text, onDelete}) => <div className="task">
  <a className="delete" onClick={onDelete}>x</a>
  <p>{text}</p>
</div>;


class AddTaskForm extends React.Component {

  constructor(props){
    super(props);
    this.state = { isOpen : false};
  }

  open = () => {
    this.setState({ isOpen : true});
  };

  close = () => {
    this.setState({ isOpen : false});
  };

  submit = (e) => {
    this.props.onSubmit(this.input.value);
    e.preventDefault();
  };

  render(){
    return <div className="task-add">
      { this.state.isOpen ?
        <form onSubmit={this.submit}>
          <input ref={i => this.input = i} onBlur={this.close} type="text" placeholder="Add a task"/>
        </form> :
        <button onClick={this.open}>Add</button>
      }
    </div>;
  }
}

const Column = ({id, name, title, tasks, isTaskBeingAdded, onDeleteTask, onDelete, onTaskAdd}) => <div className="column">
  <a className="delete" onClick={onDelete}>x</a>
  <h1>{name}</h1>
  {
    tasks.map(({text, id}) => {
      const props = {
        text,
        key : id,
        onDelete : () => { onDeleteTask(id); }
      };
      return <Task {...props}/>
    })
  }
  <AddTaskForm onSubmit={onTaskAdd}/>
</div>;


class AddColumnForm extends React.Component {

  submit = (e) => {
    this.props.onSubmit(this.input.value);
    e.preventDefault();
  };

  render() {
    return <div className="column-add">
      <form onSubmit={this.submit}>
        <input ref={i => this.input = i} type="text" placeholder="Add a column"/>
      </form>
    </div>;
  }
}

export default ({name, columns, onDeleteTask, onDeleteColumn, onColumnAdd, onTaskAdd}) => <div className="board">
  <h1>{name}</h1>
  <div className="links">
    <Link to={'/user/1'}>Link to user 1</Link>
    <Link to={'/user/2'}>Link to user 2</Link>
    <Link to={'/user/3'}>Link to user 3 (does not exist)</Link>
  </div>
  <div className="columns">
    {
      columns.map(column => {
        const props = {
          ...column,
          key : column.id,
          onDelete : () => { onDeleteColumn(column.id); },
          onDeleteTask,
          onTaskAdd : (text) => {
            onTaskAdd(text, column.id);
          }
        };
        return <Column {...props}/>
      })
    }
    <AddColumnForm onSubmit={onColumnAdd}/>
  </div>
</div>;