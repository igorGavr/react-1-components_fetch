import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {getPosts} from "../servises/api";

const Posts = () => {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;