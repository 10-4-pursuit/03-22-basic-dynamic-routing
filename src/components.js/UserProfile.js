import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  // Access the username parameter from the route
  const { username } = useParams();

  return (
    <div>
      <h2>Hello, {username}!</h2>
      <p>This is the user profile page for {username}.</p>
    </div>
  );
}

export default UserProfile;