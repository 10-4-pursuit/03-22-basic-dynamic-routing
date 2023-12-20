import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const { username } = useParams();

    return (
        <div>
            <h2>Hello, {username}!</h2>
            <p>Nice to see you today!</p>
        </div>
    )
}

export default UserProfile;