import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <div className='taC'>
      Welcome to Home Page
      <div>
        <Link to="/friend-list" className='f8'>Click here to navigate to Friend List</Link>
      </div>

    </div>
  )
}
