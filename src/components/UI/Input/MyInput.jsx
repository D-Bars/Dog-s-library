import React from 'react';
import cl from './MyInput.module.scss';

const MyInput = ({ placeholder, value, setValue }) => {
  return (
    <input
      className={cl.MyInput}
      placeholder={placeholder}
      value={value}
      onChange={(e) => { setValue(e.target.value) }}
    />
  );
};
export default MyInput;