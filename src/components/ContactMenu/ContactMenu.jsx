import { useState } from 'react';
import PropTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SureModal } from 'components/SureModal/SureModal';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import {
  OpenBtn,
  Container,
  PictureThumb,
  Picture,
  ContactTitle,
  StyledLink,
} from './ContactMenu.styled';

export const ContactMenu = ({ contact }) => {
  const [show, setShow] = useState(false);

  const setPicture = () => {
    const ratio = window.devicePixelRatio;
    return ratio > 1
      ? require('../../images/contact.jpg')
      : require('../../images/contact@2x.png');
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <OpenBtn variant="dark" onClick={handleShow}>
        View details
      </OpenBtn>

      <Container show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Selected Contact</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <PictureThumb>
            <Picture src={setPicture()} alt="User Phone" />
          </PictureThumb>
          <ContactTitle>{contact.name}</ContactTitle>
          <p>{contact.number}</p>
          <StyledLink href={`tel:${contact.number}`}>Call contact</StyledLink>
          <AddContactForm type="contact" contact={contact} />
          <SureModal contactId={contact.id} />
        </Offcanvas.Body>
      </Container>
    </>
  );
};

ContactMenu.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};