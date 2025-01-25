import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import ItemsList from './components/ItemsList';
import style from './styles/App.scss';
import ErrorMessage from './components/ErrorMessage';
import useFetchPosts from './components/hooks/useFetchPosts';



const App = () => {
  const {posts, error} = useFetchPosts();

  return (
    <div className='App'>
      <SearchBox></SearchBox>
      {error ? (
        <ErrorMessage>There was an error loading data. Please try again later.</ErrorMessage>
      ) :(
        <ItemsList posts={posts}></ItemsList>
      )
    }
    </div>
  );
};
export default App;