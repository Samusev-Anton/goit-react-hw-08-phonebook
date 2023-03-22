import { ContactItemEntrails } from 'components/ContactList/ContactListItem';
import { Modal } from 'components/Modal/Modal';
import { ChangeContactForm } from 'components/ChangeContactModal/ChangeContactForm';

import {
  ContactListStyle,
  ContactListItem,
  ContactChangeContact,
} from 'components/ContactList/ContactList.styled';
import { selectFilteredContacts, selectAuth } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations/contactsOperations';
import { useEffect, useState } from 'react';

export const ContactList = () => {
  const [modal, setModal] = useState(false);
  const [changedContact, setChangedContact] = useState({});
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  const activeModal = id => {
    const contact = filteredContacts.filter(
      filteredContact => filteredContact._id === id
    );
    setModal(true);
    setChangedContact(contact[0]);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <ContactListStyle>
        {filteredContacts.map(filteredContact => {
          return (
            <ContactListItem key={filteredContact._id}>
              <ContactItemEntrails
                filteredContact={filteredContact}
                activateModal={activeModal}
              />
            </ContactListItem>
          );
        })}
      </ContactListStyle>
      <Modal isOpened={modal} isCloseModal={closeModal}>
        {modal === true && (
          <>
            <ContactChangeContact>
              Do you want change contact?
            </ContactChangeContact>
            <p style={{ marginBottom: '15px' }}>
              You can change any field by clicking on the selected field{' '}
            </p>
            <ChangeContactForm
              isCloseModal={closeModal}
              changedContact={changedContact}
            />
          </>
        )}
      </Modal>
    </>
  );
};
