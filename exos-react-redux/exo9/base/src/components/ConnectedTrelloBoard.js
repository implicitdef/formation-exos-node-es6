import React from "react";
import {connect} from "react-redux";
import TrelloBoard from "./TrelloBoard";
import * as columns from "../redux/ducks/columns";


const mapStateToProps = (state) => {
  return {
    name : "My Board",
    columns : state.columns
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTask : (id) => {
      dispatch(columns.deleteTask(id));
    },
    onDeleteColumn : (id) => {
      dispatch(columns.deleteColumn(id));
    },
    onTaskAdd : (text, columnId) => {
      dispatch(columns.addTask(text, columnId));
    },
    onColumnAdd : (name) => {
      dispatch(columns.addColumn(name));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrelloBoard);