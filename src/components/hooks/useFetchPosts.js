import React, { useState } from 'react';

export const useFetchPosts = (callback) => {
  const [error, setError] = useState(false);
  const [postsLoading, setPostsLoading] = useState(false);

   const fetching = async (...args) => {
    try {
      setPostsLoading(true);
      await callback(...args);
    }
    catch (error) {
      setError(true);
      console.error(error)
    }
    finally {
      setPostsLoading(false)
    }
  }
  return [ fetching, error, postsLoading ]
}