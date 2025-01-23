import React from 'react';
import cl from './styles/ErrorMessage.module.scss';

const ErrorMessage = ({children}) => {
  return (
    <div className={cl.error_message}>
        {children}
    </div>
  );
};
export default ErrorMessage;