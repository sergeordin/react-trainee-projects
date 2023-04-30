import { useEffect, useState } from 'react';
import Post from './Post';
import './Posts.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <>
            <h1>Posts</h1>
            <hr />
            <div className="posts">
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    posts.map((post) => {
                        return <Post key={post.id} {...post} />;
                    })
                )}
            </div>
        </>
    );
}

export default Posts;
