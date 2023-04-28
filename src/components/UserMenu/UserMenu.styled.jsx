import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const Container = styled.div`
  padding: 20px 10px;
  text-align: center;
  font-size: 18px;
`;

export const WellcomePhrase = styled.h3`
  margin-top: 20px;
  font-weight: 700;
  font-size: 22px;
`;

export const PictureThumb = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px auto 10px;
  border: 4px solid black;
`;

export const Picture = styled.img`
  height: 150px;
`;

export const UsernameText = styled.p`
  font-weight: 500;
  font-size: 22px;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
  font-size: 18px;
`;