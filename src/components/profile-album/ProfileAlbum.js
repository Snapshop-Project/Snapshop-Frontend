import React from 'react';
import './ProfileAlbum.css';

function ProfileAlbum({ name, albumPicture }) {
  return (
    <div className="profile-album">
        <div className="album-image">
            <img src={albumPicture} alt={name} />
        </div>
        <p>{name}</p>
    </div>
  );
}

export default ProfileAlbum;