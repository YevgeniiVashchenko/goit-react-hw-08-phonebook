import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const ListElem = styled.li`
  font-size: 18px;
`;

export const StyledCard = styled(Card)`
  position: relative;
  width: 250px;
  height: 250px;
  text-align: center;
  & svg {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
`;