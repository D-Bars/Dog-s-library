import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [postsLoading, setPostsLoading] = useState(true);

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
        setPostsLoading(false)
        setPosts(response.data);
      })
      .catch((error) => {
        setError(true);
        console.error(error)
      });
  }, [])

  return {posts, error, postsLoading};
};
export default useFetchPosts;