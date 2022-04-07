import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {getPost, getPosts} from "../servises/api";
import {logDOM} from "@testing-library/react";
import PostInfo from "./PostInfo";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [chosenPost, setChosenPost] = useState(null)
    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    }, [])
    const choosePost = (id) => {
        getPost(id).then(value => setChosenPost(value.data))

    }
    return (
        <div>
            <div>
                {
                    chosenPost && <PostInfo post={chosenPost}/>
                }
            </div>
            <div className={'posts'}>
                {posts.map(post => <
                    Post
                    key={post.id}
                    post={post}
                    choosePost={choosePost}
                />)}
            </div>
        </div>
    );
};

export default Posts;