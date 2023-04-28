import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import { Layout, BigColumn, SmallColumn } from './AuthLayout.styled';

export const AuthLayout = ({ children, layout = 'login' }) => {
  return (
    <Container fluid>
      <Layout layout={layout}>
        <BigColumn xs={8} layout={layout}></BigColumn>
        <SmallColumn>{children}</SmallColumn>
      </Layout>
    </Container>
  );
};

AuthLayout.propTypes = {
  layout: PropTypes.string,
};