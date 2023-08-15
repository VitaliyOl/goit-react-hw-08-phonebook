import React from 'react';
import { Container, StyledLink } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

export const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <Container style={{ marginLeft: 'auto' }}>
      <StyledLink to="/register"> {t('Register')} </StyledLink>
      <StyledLink to="/login">{t('Login')}</StyledLink>
    </Container>
  );
};
