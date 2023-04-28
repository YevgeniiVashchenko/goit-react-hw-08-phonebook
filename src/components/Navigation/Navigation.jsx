import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshingUser,
  selectContacts,
} from 'redux/selectors';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {
  AppBar,
  LogoIcon,
  LogoText,
  NavContainer,
  StyledLink,
  AuthThumb,
  TotalContactsText,
} from './Navigation.styled';

export const Navigation = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  const isRefreshingUser = useSelector(selectIsRefreshingUser);
  const contacts = useSelector(selectContacts);

  return (
    <AppBar bg="dark" expand="lg">
      <NavContainer className="justify-content-flex-start">
        <LinkContainer to="/">
          <LogoText>
            <LogoIcon />
            PhoneBook
          </LogoText>
        </LinkContainer>
        <StyledLink to="/">
          <Nav.Link>Home</Nav.Link>
        </StyledLink>
        {isLoggenIn || isRefreshingUser ? (
          <>
            <StyledLink to="/contacts">
              <Nav.Link>Contacts</Nav.Link>
            </StyledLink>
            <TotalContactsText>
              Total contacts: {contacts.length}
            </TotalContactsText>
          </>
        ) : (
          <AuthThumb>
            <StyledLink to="/login">
              <Nav.Link>Log In</Nav.Link>
            </StyledLink>
            <StyledLink to="/register">
              <Nav.Link>Sign Up</Nav.Link>
            </StyledLink>
          </AuthThumb>
        )}
      </NavContainer>
    </AppBar>
  );
};