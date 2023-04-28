import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Layout = styled(Row)`
  margin: 0;
  min-height: 90vh;
`;

export const BigColumn = styled(Col)`
  padding: 0 20px;
  border-left: 4px solid black;
`;

export const FilterThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;