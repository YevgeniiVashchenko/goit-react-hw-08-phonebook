import PropTypes from 'prop-types';
import { ListElem } from './ContactListElem.styled';
import { ContactMenu } from '../ContactMenu/ContactMenu';
import { FaUserCircle } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { StyledCard } from './ContactListElem.styled';

export const ContactListElem = ({ contact }) => {
  return (
    <ListElem>
      <StyledCard border="dark">
        <Card.Body>
          <FaUserCircle />
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>{contact.number}</Card.Text>
          <ContactMenu contact={contact} />
        </Card.Body>
      </StyledCard>
    </ListElem>
  );
};

ContactListElem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};