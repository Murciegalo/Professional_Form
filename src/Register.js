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
    console.log(USER_REGEX.test(user));
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

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live='assertive'>
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor='username'>Username:</label>
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
      </form>
    </section>
  );
};
