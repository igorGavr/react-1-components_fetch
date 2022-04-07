import React from 'react';

const UserInfo = ({user}) => {
    const {id, name, username, email, address: {street, suite, city, zipcode, geo:{lat, lng}},
        phone, website, company: {name: companyName, catchPhrase, bs}} = user
    return (
        <div>
            <div>
                ID - {id}  Name - {name} Username - {username}
            </div>
            <div>
                {email} -- Street {street} -- City {city}
            </div>
            <div>
                {suite} ** {zipcode} ** {lat} ** {lng}
            </div>
            <div>
                {phone} -- {website}
            </div>
            <div>
                {companyName}
            </div>
            {catchPhrase}  {bs}
        </div>
    );
};

export default UserInfo;