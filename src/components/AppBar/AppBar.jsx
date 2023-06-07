import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Header } from './AppBar.styled';

export function AppBar() {
  return (
    <Header>
      <Navigation />
      <AuthNav />
    </Header>
  );
}
