import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact, editContact } from 'redux/operations';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import {
  StyledButton,
  FormContainer,
  Label,
  Input,
  SubmitButton,
} from './AddContactForm.styled';

export const AddContactForm = ({
  type = 'user',
  contact = {
    name: '',
    number: '',
  },
}) => {
  const [show, setShow] = useState(false);
  const [isSameMessage, setIsSameMessage] = useState(null);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleCheck = checkName => {
    const check = contacts.filter(
      contact => contact.name.toLowerCase() === checkName.toLowerCase()
    );
    if (check.length) {
      setIsSameMessage(`${checkName} is already in contacts`);
      return false;
    } else {
      return true;
    }
  };

  const FormSchema = object({
    name: string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required('Required'),
    number: string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          excludeEmptyString: true,
        }
      )
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: contact.name,
      number: contact.number,
    },
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      if (type === 'user' && handleCheck(values.name) === false) {
        return;
      } else {
        setIsSameMessage(null);
        const data = contact.id ? { ...values, id: contact.id } : values;

        type === 'user'
          ? dispatch(addContact(data))
          : dispatch(editContact(data));
        resetForm({
          name: '',
          number: '',
        });
        setShow(false);
      }
    },
  });

  const handleShow = () => {
    setIsSameMessage(null);
    setShow(true);
  };
  const handleClose = () => {
    formik.resetForm({
      name: '',
      number: '',
    });
    setShow(false);
  };

  return (
    <>
      <StyledButton variant="dark" type={type} onClick={handleShow}>
        {type === 'user' ? 'Add contact' : 'Edit'}
      </StyledButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {type === 'user' ? 'Add new contact' : 'Edit contact'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContainer onSubmit={formik.handleSubmit}>
            <Label>
              Contact name
              <Input
                name="name"
                type="text"
                placeholder="Samanta Smith"
                onChange={formik.handleChange}
                value={formik.values.name}
                isValid={formik.touched.name}
                isInvalid={formik.errors.name}
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Label>
            <Label>
              Phone number
              <Input
                name="number"
                type="tel"
                placeholder="111-11-11"
                onChange={formik.handleChange}
                value={formik.values.number}
                isValid={formik.touched.number}
                isInvalid={formik.errors.number}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.number}
              </Form.Control.Feedback>
            </Label>
            <SubmitButton variant="dark" type="submit">
              {type === 'user' ? 'Add contact' : 'Edit contact'}
            </SubmitButton>
          </FormContainer>
          {isSameMessage && <ErrorMessage message={isSameMessage} />}
        </Modal.Body>
      </Modal>
    </>
  );
};

AddContactForm.propTypes = {
  type: PropTypes.string,
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};