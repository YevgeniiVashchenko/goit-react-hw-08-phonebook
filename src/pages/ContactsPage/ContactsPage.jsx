import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import Col from 'react-bootstrap/Col';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Layout, BigColumn, FilterThumb } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Col>
        <UserMenu />
      </Col>
      <BigColumn xs={9}>
        <FilterThumb>
          <Filter />
          <AddContactForm type="user" />
        </FilterThumb>
        <ContactList />
      </BigColumn>
    </Layout>
  );
};

export default ContactsPage;
