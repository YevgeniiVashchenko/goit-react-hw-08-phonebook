import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: white;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 22px;
`;

export const StyledSpinner = styled(Spinner)`
  width: 80px;
  height: 80px;
`;