
const ADD_COLUMN = 'tasks/ADD_COLUMN';
const DELETE_COLUMN = 'tasks/DELETE_COLUMN';
const ADD_TASK = 'tasks/ADD_TASK';
const DELETE_TASK = 'tasks/DELETE_TASK';

const maxIdOf = items => {
  const ids = items.map(item => item.id);
  return ids.length === 0 ? 0 : Math.max(...ids);
};
// flatten an array
const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);


export default (state = [], action) => {
  switch (action.type) {

    case ADD_COLUMN :
      return [
        ...state,
        {
          id : maxIdOf(state) + 1,
          name : action.name,
          tasks : []
        }
      ];

    case DELETE_COLUMN :
      return state.filter(c => c.id !== action.id);

    case ADD_TASK :
      const allTasks = flatten(state.map(c => c.tasks));
      return state.map(column => {
        if (column.id === action.columnId) {
          return {
            ...column,
            tasks : [
              ...column.tasks,
              {
                id : maxIdOf(allTasks) + 1,
                text : action.text
              }
            ]
          }
        }
        return column;
      });

    case DELETE_TASK :
      return state.map(column => {
        return {
          ...column,
          tasks : column.tasks.filter(task => task.id !== action.id)
        };
      });

    default :
      return state;
  }
}


export const addColumn = name => ({ type : ADD_COLUMN, name});
export const deleteColumn = id => ({ type : DELETE_COLUMN, id});
export const addTask = (text, columnId) => ({ type : ADD_TASK, text, columnId});
export const deleteTask = id => ({ type : DELETE_TASK, id});






