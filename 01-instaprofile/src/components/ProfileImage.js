import React from 'react'

const ProfileImage = props => {
    return (
        <div className="profile-image">
            <div className="circle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                    style={{enableBackground:'new -580 439 577.9 194'}} xmlSpace="preserve">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            </div>
            <img src={props.user.img} alt="" />
        </div>
    )
}

export default ProfileImage
