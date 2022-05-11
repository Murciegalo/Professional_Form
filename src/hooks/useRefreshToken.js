import axios from '../api/axios';
import useAuth from './useAuth';

export const useRefreshToken = () => {
  const { setAuth } = useAuth;
  const refresh = async () => {
    const res = await axios.get('/refresh');
    setAuth((prev) => {
      console.log(prev);
      console.log(res);
      return { ...prev, toke: res.data };
    });
    return res.data;
  };
  return refresh;
};
