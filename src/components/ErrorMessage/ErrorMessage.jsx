import { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { AlertContainer } from './ErrorMessage.styled';

export const ErrorMessage = ({ message }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <AlertContainer
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Oops, something went wrong!</Alert.Heading>
        <p>{message}</p>
      </AlertContainer>
    );
  }
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};