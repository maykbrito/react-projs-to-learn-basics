import React from 'react'

const ProfileStats = props => {
    return (
        <div className="profile-stats">
            <ul>
                <li>
                    <span className="profile-stat-count posts">{props.user.posts}</span> posts
                </li>
                <li>
                    <span className="profile-stat-count followers">{props.user.followers}</span> followers
                </li>
                <li>
                    <span className="profile-stat-count following">{props.user.following}</span> following
                </li>
            </ul>
        </div>
    )
}

export default ProfileStats
