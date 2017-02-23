import * as api from "../../api/api";

const FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS :
      return action.user;
    default :
      return state;
  }
}


const fetchUserSuccess = user => ({ type : FETCH_USER_SUCCESS, user});


export const fetchUser = (id) => {
  return dispatch => {
    return api.getUser(id)
      .then(user => {
        dispatch(fetchUserSuccess(user));
      })
      .catch(console.error);
  }
};

