import React from "react";
import { useParams } from 'react-router-dom';
import { useState } from "react";


function UserProfile (props) {
const { username } = useParams();



    return (
        <div>  
        Hello, { username }!
        </div>
    )
}

export default UserProfile;