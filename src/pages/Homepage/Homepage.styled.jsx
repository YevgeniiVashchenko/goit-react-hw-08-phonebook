import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  padding: 0 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 400px;
  text-align: center;
  font-size: 16px;
  > svg {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
`;