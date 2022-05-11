import React from 'react';
import { Link } from 'react-router-dom';

export const Unauthorized = () => {
  return (
    <>
      <div>Unauthorized</div>
      <Link to='/'>Back</Link>
    </>
  );
};
