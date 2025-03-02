import React, { useState } from 'react';
import cl from './MyInput.module.scss';

const MyInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={cl.MyInput}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default MyInput;