import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logout());
  return (
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <p>Welcome, {user.name}</p>
      <Button variant="outlined" type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
