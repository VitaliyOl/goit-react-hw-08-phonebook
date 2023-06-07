import React from 'react';
import { NavHeader, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </NavHeader>
  );
};
