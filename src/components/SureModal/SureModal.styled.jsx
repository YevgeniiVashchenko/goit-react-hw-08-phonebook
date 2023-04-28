import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const StyledButton = styled(Button)`
  margin-top: 15px;
  margin-left: 25px;
  width: 120px;
  font-size: 18px;
`;

export const ModalContainer = styled(Modal)`
  text-align: center;
  font-size: 18px;
`;

export const ModalFooter = styled(Modal.Footer)`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
