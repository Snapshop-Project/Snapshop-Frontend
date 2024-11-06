import React from 'react';
import Header from '../../components/main-header/Header.js';
import Sidebar from '../../components/side-bar/Sidebar.js';
import ProfileHeader from '../../components/profile-header/ProfileHeader';
import ProfileAlbum from '../../components/profile-album/ProfileAlbum';
import './ProfilePage.css';

function ProfilePage() {
  const albums = [
    { name: 'Album 1', albumPicture: '/ExampleImages/Animal.jpg' },
    { name: 'Album 2', albumPicture: '/ExampleImages/Cave.jpg' },
    { name: 'Album 3', albumPicture: '/ExampleImages/Cityscape.jpg' },
    { name: 'Album 4', albumPicture: '/ExampleImages/PinkFlowers.jpg' },
    { name: 'Album 5', albumPicture: '/ExampleImages/RedPanda.jpg' }
  ];

  const profileInfo = {
    name: 'John Doe',
    bio: 'This is a short bio about John Doe.',
    contactDetails: 'johndoe@example.com',
    profilePicture: '/ExampleImages/Portrait.jpg'
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-main-content">
        <Sidebar />
        <div className="profile-content-area">
          <ProfileHeader {...profileInfo} />
          <div className="profile-albums">
            {albums.map((album, index) => (
                <ProfileAlbum key={index} {...album} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;