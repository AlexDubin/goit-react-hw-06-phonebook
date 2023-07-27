import React from 'react';
import PropTypes from 'prop-types';
import { FaPhone } from 'react-icons/fa';
import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const formatPhoneNumber = phoneNumber => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
    }
    return phoneNumber;
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p>
            <FaPhone /> - {contact.name}: {formatPhoneNumber(contact.number)}
          </p>
          <button
            className={css.btnx}
            onClick={() => handleDeleteContact(contact.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
