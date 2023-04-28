import { Container, Text, StyledSpinner } from './Loading.styled';

export const Loading = () => {
  return (
    <Container>
      <Text>Please, wait...</Text>
      <StyledSpinner animation="border" />
    </Container>
  );
};