import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const StyledButton = styled(Button)`
  padding: 5px 10px;
  width: ${props => (props.type === 'user' ? '200px' : '120px')};
  margin-top: ${props => props.type === 'contact' && '15px'};
  margin: ${props => props.type === 'user' && '0'};
  font-weight: ${props => (props.type === 'user' ? 500 : 400)};
  font-size: 18px;
`;

export const FormContainer = styled(Form)`
  width: 100%;
  font-size: 18px;
`;

export const Label = styled(Form.Label)`
  display: block;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Input = styled(Form.Control)`
  margin-top: 5px;
  :focus,
  :active {
    outline: 4px solid #c0bdbd;
  }
`;

export const SubmitButton = styled(Button)`
  margin-left: 75%;
`;