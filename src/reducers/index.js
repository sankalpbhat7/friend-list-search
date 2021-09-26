import { combineReducers } from 'redux';
import userList from '../components/FriendList/reducer';

const rootReducer = () => combineReducers({
  userList,
});

export default rootReducer;
