import { useDispatch, useSelector } from 'react-redux';
import { selectUsername, selectEmail } from 'redux/selectors';
import { logOut } from 'redux/operations';
import {
  Container,
  WellcomePhrase,
  PictureThumb,
  Picture,
  UsernameText,
  StyledButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  const setPicture = () => {
    const ratio = window.devicePixelRatio;
    return ratio > 1
      ? require('../../images/user.jpg')
      : require('../../images/user@2x.jpg');
  };

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <WellcomePhrase>Wellcome to Phonebook!</WellcomePhrase>
      <p>We've been waiting for you.</p>
      <PictureThumb>
        <Picture src={setPicture()} alt="User Phone" />
      </PictureThumb>
      <UsernameText>{username}</UsernameText>
      <p>{email}</p>
      <StyledButton onClick={handleClick} variant="dark" type="button">
        Logout
      </StyledButton>
    </Container>
  );
};