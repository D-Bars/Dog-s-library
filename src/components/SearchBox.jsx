import React from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';
import cl from './styles/SearchBox.module.scss'

const SearchBox = () => {
  return (
    <div className={cl.SearchBox}>
        <MyInput
        placeholder='search...'
        />
        <MyButton>send</MyButton>
    </div>
  );
};
export default SearchBox;