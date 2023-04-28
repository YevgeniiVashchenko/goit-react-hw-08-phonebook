import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { BiSearch } from 'react-icons/bi';

export const Label = styled(Form.Label)`
  display: block;
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  > svg {
    width: 30px;
    height: 30px;
  }
`;

export const Input = styled(Form.Control)`
  display: inline-block;
  width: 700px;
  /* margin-top: 10px; */
  padding-left: 50px;
  :focus,
  :active {
    outline: 4px solid #c0bdbd;
  }
`;

export const SearchIcon = styled(BiSearch)`
  position: relative;
  left: 40px;
`;