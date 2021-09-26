import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";

import { getUserList } from './action';

import Pagination from '../pagination';
import ConfirmationModal from './components/ConfirmationModal';

export const FriendList = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [friendList, setFriendList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [tempId, setTempId] = useState();

  const {
    userList
  } = useSelector(state => {
    return ({
      userList: state.userList.data,
    })
  });

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    setFriendList(userList)
  }, [userList]);

  const onSearchInput = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    setUserName(e.target.value);
  }

  const onAddUser = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    const _user = {
      fullName: userName,
      id: friendList.length + 1,
      isFavorite: false,
    };

    setFriendList([_user, ...friendList])
  }

  const addToFavorites = (e, id) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    setFriendList(friendList.map(friend => {
      if (friend.id === id) {
        friend.isFavorite = !friend.isFavorite
      }
      return friend;
    }));

  }
  const onClickDelete = (e, id) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    setShowModal(true);
    setTempId(id);
  }

  const onConfirmClick = (id) => {
    setFriendList(_.filter(friendList, friend => {

      return friend.id !== id;
    }));

    setTempId('');
    setShowModal(false);
  }

  if (_.isEmpty(friendList)) {
    return null;
  }

  const renderList = _.filter(friendList, friend => {
    return _.lowerCase(friend.fullName).startsWith(_.lowerCase(userName));
  });

  const _error = renderList.length === 0 ? "User not found or Press Enter to add the User" : "";

  return (
    <div className='list-container'>
      <div className='banner ttC f5 fw600'>Friend List</div>
      <form onSubmit={onAddUser} >
        <input type='text' className='f6' value={userName}
          placeholder={`Enter your friend's name`} onChange={onSearchInput} />
      </form>

      {!_.isEmpty(renderList) && _.isEmpty(_error) &&
        <Pagination
          renderList={renderList}
          addToFavorites={addToFavorites}
          onClickDelete={onClickDelete}
        />
      }

      {showModal && <ConfirmationModal
        id={tempId}
        onDeactivateModal={() => setShowModal(false)}
        onConfirmClick={onConfirmClick}
      />}

      {!_.isEmpty(_error) && <div className='user-block d--f'>
        <div className='d--f user-name'>
          <span className='fw600 f5'>{_error}</span>
        </div>
      </div>}

    </div>
  )
}
