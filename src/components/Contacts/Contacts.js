import React from 'react';

const Contacts = ({ contacts }) => (
  <ul className="list">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>{name}: </span>
        <span>{number}</span>
      </li>
    ))}
  </ul>
);

export default Contacts;
