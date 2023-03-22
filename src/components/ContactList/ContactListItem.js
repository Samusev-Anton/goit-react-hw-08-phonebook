// import PropTypes from 'prop-types';
import {
  ContactWrapper,
  ContactNumber,
  ContactEmail,
  ButtonForDelete,
  Favorite,
} from 'components/ContactList/ContactList.styled';
import { useDispatch } from 'react-redux';
import { Tooltip } from '@mui/material';
import {
  deleteContact,
  addToFavorite,
} from 'redux/operations/contactsOperations';

import DeleteIcon from '@mui/icons-material/Delete';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CreateIcon from '@mui/icons-material/Create';

export const ContactItemEntrails = ({ filteredContact, activateModal }) => {
  const dispatch = useDispatch();
  return (
    <ContactWrapper>
      <Tooltip title="Press for add to favorite">
        <ButtonForDelete
          type="button"
          onClick={() => dispatch(addToFavorite(filteredContact))}
        >
          {filteredContact.favorite === true ? (
            <Favorite />
          ) : (
            <StarOutlineIcon />
          )}
        </ButtonForDelete>
      </Tooltip>
      <ContactNumber>{filteredContact.name}</ContactNumber>
      <ContactEmail>{filteredContact.email}</ContactEmail>
      <ContactNumber>{filteredContact.phone}</ContactNumber>
      <Tooltip title="Press to delete contact">
        <ButtonForDelete
          type="button"
          onClick={() => dispatch(deleteContact(filteredContact._id))}
        >
          <DeleteIcon />
        </ButtonForDelete>
      </Tooltip>

      <Tooltip title="Press to change contact">
        <ButtonForDelete
          type="button"
          onClick={() => activateModal(filteredContact._id)}
        >
          <CreateIcon />
        </ButtonForDelete>
      </Tooltip>
    </ContactWrapper>
  );
};

// ContactItemEntrails.propTypes = {
//   // id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
