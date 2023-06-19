import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavHeader, StyledLink } from './Navigation.styled';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavHeader>
      <StyledLink to="/">
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 , }}
          >
           <MenuIcon sx={ {
      '&:hover': {
        color: '#fff',        
      },
      color: '#FFAE00', }}/>
          </IconButton>
      </StyledLink>

     
      {isLoggedIn &&         
      <StyledLink to="/contacts" >Contacts</StyledLink>        
          }
    </NavHeader>
  );
};
