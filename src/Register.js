import { useRef, useEffect, useState } from 'react';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PWD_REGEX, USER_REGEX } from './utils/tools';

export const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState(null);
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState();
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  //Set Focus
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  //Clear err msg
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefaul();
  };
  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live='assertive'>
        {errMsg}
      </p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username:
          <span className={validName ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validName || !user ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type='text'
          id='username'
          ref={userRef}
          autoComplete='off'
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? 'false' : 'true'}
          aria-describedby='uidnote'
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id='uidnote'
          ref={errRef}
          className={
            userFocus && user && !validName ? 'instructions' : 'offscreen'
          }>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.
          <br />
          Must begin with a letter. <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
        <label htmlFor='useremail'>
          Email:
          <span className={validEmail ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={!validEmail || !email ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type='email'
          id='useremail'
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-invalid={validEmail ? 'false' : 'true'}
          aria-describedby='emailnote'
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id='emailnote'
          ref={errRef}
          className={
            userFocus && email && !validEmail ? 'instructions' : 'offscreen'
          }>
          <FontAwesomeIcon icon={faInfoCircle} />
          Please input a proper email address, thanks.
        </p>
        <label htmlFor='password'>
          Password:
          <span className={validPwd ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type='password'
          id='password'
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? 'false' : 'true'}
          aria-describedby='pwdnote'
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p
          id='pwdnote'
          className={pwdFocus && !validName ? 'instructions' : 'offscreen'}>
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, numbers & special
          characters. <br />
          Allowed special characters:{' '}
          <span aria-label='exclamation-mark'>!</span>
          <span aria-label='at symbol'>@</span>{' '}
          <span aria-label='hashtag'>#</span>
          <span aria-label='dollar sign'>$</span>{' '}
          <span aria-label='percent'>%</span>
        </p>
        <label htmlFor='confirm_pwd'>
          Confirm Password:
          <span className={validMatch && matchPwd ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type='password'
          id='confirm_pwd'
          onChange={(e) => setMatchPwd(e.target.value)}
          required
          aria-invalid={validMatch ? 'false' : 'true'}
          aria-describedby='confirmnote'
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p
          id='confirmnote'
          className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Password field don't match
        </p>
        <button
          disabled={!validName || !validPwd || !validMatch ? true : false}>
          Sign Up
        </button>
      </form>
      <p>
        Already registered?
        <br />
        <span className='line'>
          {/* react-link here */}
          <a href='#'>Sign In</a>
        </span>
      </p>
    </section>
  );
};
