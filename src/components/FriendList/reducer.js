import {
  GET_USER_LISTS,
} from '../../types/types';

export default function userList(state = {}, action) {

  switch (action.type) {
    case GET_USER_LISTS:
      return Object.assign({}, state, { data: action.data });

    default:
      return state;
  }
}
