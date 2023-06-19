import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.nav`
  display: flex;
  justify-content: flex-start;
  column-gap: 30px;
  align-items: center;
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


