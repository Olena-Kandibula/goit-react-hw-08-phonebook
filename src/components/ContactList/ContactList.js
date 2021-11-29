import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts, removeContact } from 'redux/contacts/contact-slice';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';

import s from '../ContactList/ContactList.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';

function ContactList() {
  const { status, error } = useSelector(state => state.contacts);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function visibleContacts(value) {
    if (value === '') {
      return contacts;
    } else {
      return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }

  // const normalizedFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter),
  // );

  return (
    <div>
      {status === 'loading' && <h2>Loading</h2>}
      {status === 'rejected' && <h2>Ups..{error}</h2>}

      <ul className={s.list}>
        {contacts.length > 0 &&
          visibleContacts(filter).map(contact => (
            // visibleContacts.map(contact => (
            <li className={s.item} key={contact.id}>
              <p>
                <span>{contact.name}:</span> <span>{contact.phone}</span>
              </p>

              <button
                className={s.buttonDelete}
                type="button"
                onClick={() => dispatch(removeContact(contact.id))}
              >
                <TiUserDeleteOutline color="red" size="18px" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ContactList;
