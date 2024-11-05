import React from 'react';
import './ProfileHeader.css';

function ProfileHeader({ name, bio, contactDetails, profilePicture }) {
  return (
    <div className="profile-header">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile Picture" className="rounded-img" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>{bio}</p>
        <p>{contactDetails}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;