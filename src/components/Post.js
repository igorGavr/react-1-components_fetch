import React from 'react';
import './post.css'

const Post = ({post, choosePost}) => {
    const {userId, id} = post
    return (
        <div className={'post'}>
            {userId} -- {id} --
            <button onClick={() => {
                choosePost(post.id)
            }}>Post info</button>
        </div>
    );
};

export default Post;