import React from 'react';
import { Container, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Container>
  );
};
