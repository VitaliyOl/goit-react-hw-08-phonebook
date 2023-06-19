import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import Typography from '@mui/material/Typography';


export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logout());
  return (


    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', marginLeft: 'auto' }}>
      <Typography variant="h3" component="div" sx={{ flex: 1, gap: 3, fontWeight: 'regular',
            mx: 0.5,
            fontSize: 18, p: 2, color: '#FFAE00'}}>
<p>Welcome, {user.name}</p>     
          </Typography>
          <Button variant="outlined" type="button" onClick={handleLogout} sx={
  {
      '&:hover': {
        color: '#fff',        
      },
      color: '#FFAE00',
  }}>
        Logout
      </Button>

     
    </div>
  );
}

//style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
