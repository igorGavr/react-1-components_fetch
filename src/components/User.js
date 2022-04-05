import React from 'react';
import './user.css'

const User = ({user, chooseUser}) => {
    const {id, name, username, email,
        address: {street, suite, city, zipcode, geo:{lat, lng}},
        phone, website, company: {name: companyName, catchPhrase, bs}} = user
    return (
        <div className={'user'}>
            {id} -- {name} -- {username} -- {email} -- {street} --
            {suite} -- {city} -- {zipcode} -- {lat} -- {lng} --
            {phone} -- {website} -- {companyName} -- {catchPhrase} --
            {bs}
            <button onClick={() => chooseUser(user.id)}>Choose User</button>
        </div>
    );
};

export default User;