// src/components/PhotoGrid.js
import React from 'react';
import './PhotoGrid.css'; // Ensure you create this CSS file

const images = [
    '/ExampleImages/Cave.jpg',
    '/ExampleImages/Cityscape.jpg',
    '/ExampleImages/Animal.jpg',
    '/ExampleImages/Portrait.jpg',
    '/ExampleImages/PinkFlowers.jpg',
    '/ExampleImages/Stairs.jpg',
    '/ExampleImages/Turtle.jpg',
    '/ExampleImages/Wedding.jpg',
];

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {images.map((src, index) => (
                <div className="photo-item" key={index}>
                    <img src={src} alt={`Photo ${index + 1}`} onError={(e) => e.target.style.display = 'none'} />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
