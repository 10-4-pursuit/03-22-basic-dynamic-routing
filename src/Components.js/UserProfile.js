import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const { username } = useParams();
    return (
        <div>
            <h2>Greetings, {username}!</h2>
            <p>This is the user profile for {username}.</p>
        </div>
    );
}

export default UserProfile;