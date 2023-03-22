import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/operations/contactsOperations';

import {
  ClassicFormStyle,
  ClassicLabelForm,
  ClassicInputForm,
  ClassicButton,
} from 'components/GlobalStyles';

import {
  PersonIconStyle,
  LocalPhoneIconStyle,
} from 'components/icons/icons.styled';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CancelIcon from '@mui/icons-material/Cancel';

export const ChangeContactForm = ({ changedContact, isCloseModal }) => {
  const [name, setName] = useState(changedContact.name);
  const [number, setNumber] = useState(changedContact.phone);
  const [email, setEmail] = useState(changedContact.email);

  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    const newContact = {
      id: changedContact._id,
      name,
      phone: number,
      email,
    };
    dispatch(changeContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <ClassicFormStyle onSubmit={onSubmitForm}>
      <ClassicLabelForm style={{ color: 'black' }}>
        Name
        <ClassicInputForm
          onClick={event => setName('')}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <PersonIconStyle />
      </ClassicLabelForm>
      <ClassicLabelForm style={{ color: 'black' }}>
        Email
        <ClassicInputForm
          onClick={event => setName('')}
          type="text"
          name="email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <PersonIconStyle />
      </ClassicLabelForm>

      <ClassicLabelForm style={{ color: 'black' }}>
        Number
        <ClassicInputForm
          onClick={event => setName('')}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
        <LocalPhoneIconStyle />
      </ClassicLabelForm>
      <ClassicButton type="submit" onClick={isCloseModal}>
        Change contact
        <AddIcCallIcon sx={{ marginLeft: '5px' }} />
      </ClassicButton>
      <ClassicButton
        type="button"
        onClick={isCloseModal}
        style={{ marginTop: '10px' }}
      >
        Exit without changes
        <CancelIcon sx={{ marginLeft: '5px' }} />
      </ClassicButton>
    </ClassicFormStyle>
  );
};
