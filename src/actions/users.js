import * as types from '../constants';
import { userService } from '../services/user';

const loginSuccess = (data) => {
  return {
    type: types.LOGIN_SUCCESS,
    data
  };
}

const loginError = () => {
  return {
    type: types.LOGIN_ERROR
  };
};

export const login = (data, successPath) => {
  console.log(data);
  return dispatch => {
    dispatch({ type: types.LOGIN_USER })
    userService.login(data)
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        dispatch(loginSuccess(data));
      } else {
        dispatch(loginError());
        return response.data.message;
      }
    })
    .catch((response) => {
      console.log(`Error ${response.message}`);
    });
  };
};