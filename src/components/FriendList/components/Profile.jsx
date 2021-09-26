import React from 'react';
import cx from 'classnames';

export const Profile = ({ user, addToFavorites, onClickDelete }) => {

  return (
    <div className={cx('user-block d--f', { 'abc': user.isFavorite })} key={user.id}>
      <div className='d--f user-name'>
        <span className='fw600 f5'>{user.fullName}</span>
        <span className='f7'>Is your friend</span>
      </div>
      <div className='user-actions curPointer'>
        <span className={cx('fa fa-star', { 'checked': user.isFavorite })}
          onClick={(e) => addToFavorites(e, user.id)} />
        <span className="fa fa-trash-o" onClick={e => onClickDelete(e, user.id)} />
      </div>
    </div>
  )
}
