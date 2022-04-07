import React from 'react';
import './user.css'

const User = ({user, chooseUser}) => {
    const {id, name, username} = user
    return (
        <div className={'user'}>
            {id} -- {name} -- {username}
            <button onClick={() => chooseUser(user.id)}>Choose User</button>
        </div>
    );
};

export default User;