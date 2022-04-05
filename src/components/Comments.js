import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import {getComments} from "../servises/api";

const Comments = () => {
    let [comments, setComments] = useState([])
    useEffect(() => {
        getComments().then(value => setComments([...value.data]))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;