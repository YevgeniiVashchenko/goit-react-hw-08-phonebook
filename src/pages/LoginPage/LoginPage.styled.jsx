import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const FormContainer = styled(Form)`
  width: 100%;
  padding: 0 20px;
  font-size: 18px;
`;

export const Label = styled(Form.Label)`
  display: block;
`;

export const Input = styled(Form.Control)`
  :focus,
  :active {
    outline: 4px solid #c0bdbd;
  }
`;

export const StyledBtn = styled(Button)`
  position: relative;
  left: 50%;
  margin-top: 20px;
  padding: 5px 30px;
  font-size: 18px;
  transform: translate(-50%);
`;
