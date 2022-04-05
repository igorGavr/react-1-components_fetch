import React, {useEffect, useState} from 'react';
import User from "./User";
import {getUsers} from "../servises/api";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])
    const chooseUser = (id) => {
        let choosenUser = users.find(value => value.id == id)
        setUser(choosenUser)
    }
    return (
        <div>
            {
                users.map(user => <User key={user.id}
                                     user={user}
                                     chooseUser={chooseUser}/>)
            }
            {
                user && <div>{user.id} - {user.street} - {user.suite} - {user.email}</div>
            }
        </div>
    );
};
export default Users;