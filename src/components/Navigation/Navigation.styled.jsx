import styled from 'styled-components';
import { FaBookReader } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const AppBar = styled(Navbar)`
  padding: 10px 20px 0;
  & a:hover,
  & a:focus {
    color: #c0bdbd;
  }
`;

export const NavContainer = styled(Nav)`
  display: flex;
  align-items: baseline;
  width: 100%;
`;

export const LogoIcon = styled(FaBookReader)`
  width: 30px;
  height: 30px;
  color: white;
  margin-right: 10px;
`;

export const LogoText = styled.p`
  display: inline-flex;
  align-items: baseline;
  margin-right: 20px;
  font-size: 26px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`;

export const StyledLink = styled(LinkContainer)`
  font-weight: 500;
  font-size: 20px;
  color: white;
  ${AppBar} &.active {
    color: #c0bdbd;
    text-decoration: underline;
  }
`;

export const AuthThumb = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: auto;
`;

export const TotalContactsText = styled.p`
  display: inline-block;
  margin-left: auto;
  font-size: 20px;
  color: white;
`;