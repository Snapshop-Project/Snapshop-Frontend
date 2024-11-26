import React from 'react';
import './ProfileHeader.css';

function ProfileHeader({ name, bio, contactDetails, profilePicture }) {
  return (
    <div className="profile-header2">
      <div className="profile-picture2">
        <img src={profilePicture} alt="Profile Picture"/>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
        <p>{contactDetails}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;