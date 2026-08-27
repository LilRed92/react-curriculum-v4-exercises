import { useEffect, useState } from 'react';
import { getPosts } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading && <p>Loading posts...</p>}
        {error && <p role="alert">Something went wrong: {error}</p>}
        {!isLoading &&
          !error &&
          posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
      </div>
    </div>
  );
}
