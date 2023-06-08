import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavHeader, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavHeader>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavHeader>
  );
};
