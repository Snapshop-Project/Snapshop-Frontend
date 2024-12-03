import React, { useState } from 'react';
import Header from '../../components/main-header/Header.js';
// import Sidebar from '../../components/side-bar/Sidebar.js';
import ProfileHeader from '../../components/profile-header/ProfileHeader.js';
import ProfileAlbum from '../../components/profile-album/ProfileAlbum.js';
import './EditProfilePage.css';

function EditProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState("This is a short bio about John Doe.");
  const [profilePicture, setProfilePicture] = useState("/ExampleImages/Portrait.jpg");


  const albums = [
    { name: 'Album 1', albumPicture: '/ExampleImages/Animal.jpg' },
    { name: 'Album 2', albumPicture: '/ExampleImages/Cave.jpg' },
    { name: 'Album 3', albumPicture: '/ExampleImages/Cityscape.jpg' },
    { name: 'Album 4', albumPicture: '/ExampleImages/PinkFlowers.jpg' },
    { name: 'Album 5', albumPicture: '/ExampleImages/RedPanda.jpg' },
  ];

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="profile-page-container">
      <Header />
      <div className="profile-main-content-page">
        <div className="profile-content-area-page">
          <ProfileHeader
            isEditing={isEditing}
            firstName={firstName}
            lastName={lastName}
            email={email}
            bio={bio}
            profilePicture={profilePicture}
            setProfilePicture={setProfilePicture}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setBio={setBio}
            toggleEdit={handleEditToggle}
          />
          <div className="profile-albums-page">
            {albums.map((album, index) => (
              <ProfileAlbum key={index} {...album} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
