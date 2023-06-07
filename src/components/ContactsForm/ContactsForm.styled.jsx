import styled from '@emotion/styled';
import { Form, ErrorMessage } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  border: 1px solid black;
  padding: 20px;
  font-size: 20px;
`;

export const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Error = styled(ErrorMessage)`
  text-align: center;
  color: red;
`;

export const FormButton = styled.button`
  display: block;
  min-width: 150px;
  margin: 20px auto;
  font-size: 20px;
  padding: 15px 20px;
  border-radius: 20px;
  border: none;
  background-color: grey;
  color: white;

  :hover,
  :focus {
    background-color: blue;
  }
`;
