import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';

export const AlertContainer = styled(Alert)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  text-align: center;
`;