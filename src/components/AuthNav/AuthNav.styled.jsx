import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  padding-top: 16px;
  padding-bottom: 16px;

  color: #ffae00;
  

  font-size: 18px;
  font-weight: 500;

  &.active {
    color: white;
  }
`;
