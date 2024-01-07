import React, {useState} from "react";
import {useParams} from 'react-router-dom'

const UserProfile= (props) => {
    const {username} = useParams();

return (
    <h1>Hi, I'm {username}.</h1>
)
}

export default UserProfile;