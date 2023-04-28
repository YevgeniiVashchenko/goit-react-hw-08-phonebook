import styled from 'styled-components';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

export const OpenBtn = styled(Button)`
  margin-top: 10px;
  font-size: 18px;
`;

export const Container = styled(Offcanvas)`
  width: 600px;
  padding: 10px 20px;
  text-align: center;
  font-size: 20px;
`;

export const PictureThumb = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 10px;
  border: 4px solid black;
`;

export const Picture = styled.img`
  height: 150px;
`;

export const ContactTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 26px;
`;

export const StyledLink = styled.a`
  display: block;
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 5px;
  background-color: #212529;
  font-size: 18px;
  color: white;
  :hover,
  :focus,
  :active {
    color: white;
  }
`;

export const StyledButton = styled(Button)`
  display: inline-block;
  margin-top: 15px;
  width: 120px;
  margin-right: 25px;
  font-size: 18px;
`;