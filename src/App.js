import React from 'react';
import SearchBox from './components/SearchBox';
import ItemsList from './components/ItemsList';
import style from './styles/App.scss';
import ErrorMessage from './components/ErrorMessage';
import useFetchPosts from './components/hooks/useFetchPosts';
import Loader from './components/UI/Loader/Loader';



const App = () => {
  const { posts, error, postsLoading } = useFetchPosts();

  return (
    <div className='App'>
      <SearchBox></SearchBox>
      {postsLoading ? (
        <Loader></Loader>
      ) :
        error ? (
          <ErrorMessage>There was an error loading data. Please try again later.</ErrorMessage>
        ) : (
          <ItemsList posts={posts}></ItemsList>
        )
      }
    </div>
  );
};
export default App;