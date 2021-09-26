import {
  GET_USER_LISTS,
} from '../../types/types';


import userData from './data';

export function getUserList() {

  return dispatch => dispatch({
    type: GET_USER_LISTS,
    data: userData
  });
};
