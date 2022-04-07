import React from 'react';

const PostInfo = ({post}) => {
    const {title, body} = post
    return (
        <div>
            <div>
                title - {title}
            </div>
            <div>
                body - {body}
            </div>
        </div>
    );
};

export default PostInfo;