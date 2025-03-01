import React, { useState } from 'react';
import cl from './MyInput.module.scss';

const MyInput = ({ placeholder, callback }) => {
  const [value, setValue] = useState('');
  return (
    <input
      className={cl.MyInput}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        const val = e.target.value
        setValue(val);
        callback(val.toLowerCase());
      }}
    />
  );
};
export default MyInput;