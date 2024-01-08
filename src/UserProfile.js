import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const { username } = useParams();
    return <p>Hello, {username}!</p>;
  }

export default UserProfile;