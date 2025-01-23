import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import ItemsList from './components/ItemsList';
import style from './styles/App.scss';
import axios from 'axios';
import ErrorMessage from './components/ErrorMessage';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const limit = process.env.REACT_APP_LIMIT;
  const has_breeds = process.env.REACT_APP_HAS_BREEDS;

  useEffect(() => {
    axios.get(`${apiUrl}?has_breeds=${has_breeds}&limit=${limit}`, {
      headers: {
        'x-api-key': apiKey,
      }
    })
      .then(response => {
        setPosts(response.data);
      })
      .catch((error) => {
        setError(true);
        console.error(error)
      });
  }, [])
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