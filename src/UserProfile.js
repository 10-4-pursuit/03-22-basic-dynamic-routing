import { useParams } from "react-router-dom"
import React from "react"

const UserProfile = () => {

    const { username} = useParams()
    const displayName = username.charAt(0).toUpperCase() + username.slice(1)
    return (
        <div>
            <h1>User Profile</h1>
            <h2>Hello, {displayName}!</h2>
            
            
        </div>
    )
    
}

export default UserProfile