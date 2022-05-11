import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from './Users';

export const Admin = () => {
  return (
    <div>
      <h2>Admin</h2>
      <br />
      {<Users />}
      <div className='flexGrow'>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};
