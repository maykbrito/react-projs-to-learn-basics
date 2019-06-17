import React from 'react'

const ProfileBio = props => {
    return (
        <div className="profile-bio">
            <span className="profile-real-name">{props.user.name}</span>
            
            {props.user.bio && (
                <p>{props.user.bio.split('\\n').map((item, key) => (<span key={key}>{item}<br/></span>))}</p>
            )}

            {props.user.external_url && (
                <a className="external-url" href={props.user.external_url} target="_blank">{props.user.external_url}</a>
            )}
            
        </div>
    )
}

export default ProfileBio
