import React from 'react'
import './Header.css'

import ProfileStats from './ProfileStats'
import ProfileBio from './ProfileBio'
import ProfileImage from './ProfileImage'
import ProfileUserSettings from './ProfileUserSettings'

const Header = props => {
    
    const { user } = props;

    return (
        <div className="insta-bio-container">
            <div className="profile">
                <ProfileImage user={user} />
                <ProfileUserSettings user={user}/>
                <ProfileStats user={user}/>
                <ProfileBio user={user}/>
            </div>
        </div>
    )
}

export default Header