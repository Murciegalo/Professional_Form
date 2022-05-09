import axios from './api/axios';
import { useRef, useState, useEffect, useContext } from 'react';
import { AuthContext } from './context/AuthProvider';

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/signin', { email, password: pwd });
      console.log(res);
    } catch (err) {
      console.log(err.response.data);
      setErrMsg(err.response.data.msg);
    }
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
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
