import React from 'react';
import st from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={st.filter}>
    <label>Find contacts by name </label>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export default Filter;
