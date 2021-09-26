import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div className='header content--centered d--f'>
      <Link to="/" className='logo ttU ffW fw600 taL f14'>FaceBook</Link>
      <nav className='ttU f8'>
        <Link to="/">Home</Link>
        <Link to="/friend-list">Friend List</Link>
      </nav>
    </div>
  )
}
