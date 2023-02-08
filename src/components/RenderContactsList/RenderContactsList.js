import PropTypes from 'prop-types';
import { Item, Button } from './RenderContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/actions';

export const RenderContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};

RenderContacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
