import React from 'react';
import cl from './MyButton.module.scss';

const MyButton = ({children}) => {
  return (
    <div>
        <button className={cl.MyBtn}>{children}</button>
    </div>
  );
};
export default MyButton;