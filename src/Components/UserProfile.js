import React from "react";
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    let { username } = useParams();
    return(
        <h1>Hello, {username}!</h1>
    )

}

export default UserProfile;