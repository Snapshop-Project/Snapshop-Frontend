import React from 'react';
import './ProfileHeader.css';

function ProfileHeader({
  isEditing,
  firstName,
  lastName,
  email,
  bio,
  profilePicture,
  setProfilePicture,
  setFirstName,
  setLastName,
  setEmail,
  setBio,
  toggleEdit,
}) {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-page-header">
      <div className="profile-picture-section">
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-page-picture"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        )}
      </div>

      {isEditing ? (
        <div className="edit-profile-form">
          <input className= "edit-profile-text"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input className= "edit-profile-text"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input className= "edit-profile-text"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea className= "edit-profile-text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button onClick={toggleEdit}>Save</button>
        </div>
      ) : (
        <div className="view-profile">
          <h1>{`${firstName} ${lastName}`}</h1>
          <p>{bio}</p>
          <p>{email}</p>
          <button onClick={toggleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
