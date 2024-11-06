import React from 'react';
import './ProfileAlbum.css';

function ProfileAlbum({ name, albumPicture }) {
  return (
    <div className="profile-album2">
        <div className="album-image2">
            <img src={albumPicture} alt={name} />
        </div>
        <p>{name}</p>
    </div>
  );
}

export default ProfileAlbum;