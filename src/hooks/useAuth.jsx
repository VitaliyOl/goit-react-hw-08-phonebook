import { useSelector } from 'react-redux';
import { getLoogedIn, getRefreshing, getUser } from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getLoogedIn);
  const isRefreshing = useSelector(getRefreshing);
  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};
