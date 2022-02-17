import React from 'react';
import st from './Contacts.module.css';
const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={st.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={st.element} key={id}>
        <span>{name}: </span>
        <span>{number}</span>
        <button className={st.delete} onClick={() => onDeleteContact(id)}>
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;
