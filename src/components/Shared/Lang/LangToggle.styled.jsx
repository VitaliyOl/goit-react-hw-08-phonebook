import styled from 'styled-components';

// import { themes } from '../../../styles/variables/themes';

export const Container = styled.div`
  position: absolute;
  top: 30%;
  right: -5%;
`;

export const FlagBtn = styled.button`
   position: relative;
 border: none;
  transform: scale(1);
  transition-property: transform;
  background-color: white;

  &:hover,
  &:focus {
    transform: scale(1.1);
 
`;

export const Label = styled.p`
  position: absolute;
  top: -5px;
  right: -3px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6.5px;

  width: 12px;
  height: 12px;

  font-size: 8px;
  font-weight: 700;

  border-radius: 50%;
  background-color: #d5d5d5;
`;
