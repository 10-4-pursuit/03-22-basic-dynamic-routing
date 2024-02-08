import {useParams} from 'react-router-dom';
import React from 'react';

function UserProfile() {
    const {username} = useParams();
    return <h1>Hello {username}</h1>;
}

export default UserProfile;