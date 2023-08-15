import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavHeader, StyledLink } from './Navigation.styled';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  return (
    <NavHeader>
      <StyledLink to="/">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 0 }}
        >
          <MenuIcon
            sx={{
              '&:hover': {
                color: '#fff',
              },
              color: '#FFAE00',
            }}
          />
        </IconButton>
      </StyledLink>

      {isLoggedIn && <StyledLink to="/contacts">{t('Contacts')}</StyledLink>}
    </NavHeader>
  );
};
