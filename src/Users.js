import { useState, useEffect } from 'react';
import axios from './api/axios';

export const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const res = await axios.get('/user', {
          signal: controller.signal,
        });
        console.log(res.data.doc);
        isMounted && setUsers(res.data.doc);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((el, I) => (
            <li key={I}>{el?.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
};
