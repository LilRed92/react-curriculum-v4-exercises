import { useState } from 'react';
import { getSinglePost } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    setIsLoading(true);
    setError(null);

    getSinglePost(1)
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button
        className="button"
        type="button"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get post'}
      </button>
      <div className="content">
        {error && <p role="alert">Something went wrong: {error}</p>}
        {!error && post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
