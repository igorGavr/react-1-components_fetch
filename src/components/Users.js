import React, {useEffect, useState} from 'react';
import User from "./User";
import {getUser, getUsers} from "../servises/api";
import UserInfo from "./UserInfo";

const Users = () => {
    const [users, setUsers] = useState([])
    const [chosenUser, setChosenUser] = useState(null)
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])
    const chooseUser = (id) => {
        const chosenUser = users.find(value => value.id == id)
        setChosenUser(chosenUser)
    }
    return (
        <div>
            {
                chosenUser && <UserInfo user={chosenUser}/>
            }
            {
                users.map(user => <User key={user.id}
                                     user={user}
                                     chooseUser={chooseUser}/>)
            }
        </div>
    );
};
export default Users;