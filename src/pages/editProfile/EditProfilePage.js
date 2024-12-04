import React, { useState } from 'react';
import Header from '../../components/main-header/Header.js';
import ProfileHeader from '../../components/profile-header/ProfileHeader.js';
import './EditProfilePage.css';

function EditProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState("This is a short bio about John Doe.");
  const [profilePicture, setProfilePicture] = useState("/ExampleImages/Portrait.jpg");

  const [photos, setPhotos] = useState([
    { url: '/ExampleImages/Animal.jpg', title: 'Animal' },
    { url: '/ExampleImages/Cave.jpg', title: 'Cave' },
    { url: '/ExampleImages/Cityscape.jpg', title: 'Cityscape' },
    { url: '/ExampleImages/PinkFlowers.jpg', title: 'Pink Flowers' },
    { url: '/ExampleImages/RedPanda.jpg', title: 'Red Panda' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPhoto, setNewPhoto] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleAddPhotoClick = () => {
    setIsModalOpen(true);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];  
    if (file) {
      setNewPhoto(URL.createObjectURL(file)); 
    }
  };

  const handlePhotoSubmit = () => {
    if (newPhoto && newTitle) {
      setPhotos((prevPhotos) => [...prevPhotos, { url: newPhoto, title: newTitle }]);
      setNewPhoto("");
      setNewTitle("");
      setIsModalOpen(false);
    } else {
      alert("Please enter both a photo and a title before submitting.");
    }
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
            {photos.map((photo, index) => (
              <div className="profile-album2" key={index}>
                <div className="album-image2">
                  <img src={photo.url} alt={photo.title} />
                </div>
                <p>{photo.title}</p>
              </div>
            ))}
            <div className="profile-album2 add-photo-card" onClick={handleAddPhotoClick}>
              <div className="album-image2">
                <p style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>+ Add Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add a New Photo</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <input
              type="text"
              placeholder="Enter photo title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            {newPhoto && (
              <div>
                <img src={newPhoto} alt="Preview" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              </div>
            )}
            <button onClick={handlePhotoSubmit}>Add Photo</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfilePage;
