import { useRef, useState, useEffect, useContext } from 'react';
import { AuthContext } from './context/AuthProvider';

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus()
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('true');
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Success</h1>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'>
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              ref={userRef}
              autoComplete='off'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an account?
            <br />
            <span className='line'>
              {/* react-link here */}
              <a href='#'>Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};
