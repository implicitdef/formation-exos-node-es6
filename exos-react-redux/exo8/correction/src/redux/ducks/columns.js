import * as api from "../../api/api";


const FETCH_COLUMNS_SUCCESS = 'tasks/FETCH_TASKS_SUCCESS';


export default (state = [], action) => {
  switch (action.type) {

    case FETCH_COLUMNS_SUCCESS :
      return action.columns;

    default :
      return state;
  }
}


const fetchColumnsSuccess = columns => ({ type : FETCH_COLUMNS_SUCCESS, columns});


export const fetchColumns = () => {
  return dispatch => {
    return api.getColumns()
      .then(columns => {
        dispatch(fetchColumnsSuccess(columns));
      })
      .catch(console.error);
  }
};

export const addColumn = name => {
  return dispatch => {
    return api.addColumn(name)
      .then(() => {
        dispatch(fetchColumns());
      })
      .catch(console.error);
  };
};

export const addTask = (text, columnId) => {
  return dispatch => {
    return api.addTask(text, columnId)
      .then(() => {
        dispatch(fetchColumns());
      })
      .catch(console.error);
  };
};

export const deleteColumn = (id) => {
  return dispatch => {
    return api.deleteColumn(id)
      .then(() => {
        dispatch(fetchColumns());
      })
      .catch(console.error);
  };
};

export const deleteTask = (id) => {
  return dispatch => {
    return api.deleteTask(id)
      .then(() => {
        dispatch(fetchColumns());
      })
      .catch(console.error);
  };
};




