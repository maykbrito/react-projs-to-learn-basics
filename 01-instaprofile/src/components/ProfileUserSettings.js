import React from 'react'

const ProfileUserSettings = props => {
    return (
        <div className="profile-user-settings">
            <h1 className="profile-user-name">{props.user.username}</h1>
            <a className="profile-edit-btn" href={`https://instagram.com/${props.user.username}`} target="_blank">Follow</a>
        </div>
    )
}

export default ProfileUserSettings
