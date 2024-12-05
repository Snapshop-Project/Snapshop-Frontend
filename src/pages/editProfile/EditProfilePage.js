import React, { useState } from 'react';
import { useEffect } from "react";

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
    { url: '/ExampleImages/Animal.jpg', title: 'Animal', isForSale: false, price: '', description: '' },
    { url: '/ExampleImages/Cave.jpg', title: 'Cave', isForSale: false, price: '', description: '' },
    { url: '/ExampleImages/Cityscape.jpg', title: 'Cityscape', isForSale: false, price: '', description: '' },
    { url: '/ExampleImages/PinkFlowers.jpg', title: 'Pink Flowers', isForSale: false, price: '', description: '' },
    { url: '/ExampleImages/RedPanda.jpg', title: 'Red Panda', isForSale: false, price: '', description: '' },
  ]);

  const [isAddPhotoModalOpen, setIsAddPhotoModalOpen] = useState(false);
  const [newPhoto, setNewPhoto] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleAddPhotoClick = () => {
    setIsAddPhotoModalOpen(true);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPhoto(URL.createObjectURL(file));
    }
  };

  const handlePhotoSubmit = () => {
    if (newPhoto && newTitle) {
      setPhotos((prevPhotos) => [...prevPhotos, { url: newPhoto, title: newTitle, isForSale: false, price: '', description: '' }]);
      setNewPhoto("");
      setNewTitle("");
      setIsAddPhotoModalOpen(false);
    } else {
      alert("Please enter both a photo and a title before submitting.");
    }
  };

  const openSellModal = (index) => {
    setCurrentPhotoIndex(index);
    setIsSellModalOpen(true);
  };

  const handleSellPhoto = () => {
    if (isNaN(price) || price <= 0) {
      alert("Please enter a valid price"); 
      return; 
    }
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo, index) =>
        index === currentPhotoIndex
          ? { ...photo, isForSale: true, price, description }
          : photo
      )
    );
    setIsSellModalOpen(false);
    setPrice("");
    setDescription("");
  };

  // Keeps all cards the same size
  useEffect(() => {
    const resizeCards = () => {
      // Select all cards
      const cards = document.querySelectorAll(".profile-album2");
      const addPhotoCard = document.querySelector(".add-photo-card");

      // Reset heights
      cards.forEach((card) => (card.style.height = "auto"));
      if (addPhotoCard) addPhotoCard.style.height = "auto";

      // Calculate max height
      let maxHeight = 0;
      cards.forEach((card) => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) maxHeight = cardHeight;
      });

      // Height limit
      const maxHeightLimit = 395;
      maxHeight = Math.min(maxHeight, maxHeightLimit);

      // Apply max height to all cards
      cards.forEach((card) => (card.style.height = `${maxHeight}px`));
      if (addPhotoCard) addPhotoCard.style.height = `${maxHeight}px`;
    };

    resizeCards();
  }, []);

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
                {photo.isForSale && (
                  <p className="sale-info">
                    On sale for ${photo.price}
                  </p>
                )}
                <button
                  className="sell-button"
                  onClick={() => openSellModal(index)}
                >
                  {photo.isForSale ? "Edit Sale Info" : "Sell Photo"}
                </button>
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
      {isAddPhotoModalOpen && (
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
            <button className="modal-cancel-button" onClick={() => setIsAddPhotoModalOpen(false)}>Cancel</button>
            <button onClick={handlePhotoSubmit}>Add Photo</button>
            
          </div>
        </div>
      )}
      {isSellModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Set Sale Details</h3>
            <input
              type="number"
              placeholder="Price (in $)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="modal-cancel-button" onClick={() => setIsSellModalOpen(false)}>Cancel</button>
            <button onClick={handleSellPhoto}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfilePage;
