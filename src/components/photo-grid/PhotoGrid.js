// src/components/PhotoGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PhotoGrid.css';

const images = [
    { id: 'cave', src: '/ExampleImages/Cave.jpg' },
    { id: 'cityscape', src: '/ExampleImages/Cityscape.jpg' },
    { id: 'animal', src: '/ExampleImages/Animal.jpg' },
    { id: 'portrait', src: '/ExampleImages/Portrait.jpg' },
    { id: 'pinkflowers', src: '/ExampleImages/PinkFlowers.jpg' },
    { id: 'stairs', src: '/ExampleImages/Stairs.jpg' },
    { id: 'turtle', src: '/ExampleImages/Turtle.jpg' },
    { id: 'wedding', src: '/ExampleImages/Wedding.jpg' },
    { id: 'redpanda', src: '/ExampleImages/RedPanda.jpg' },
    { id: 'sunset', src: '/ExampleImages/Sunset.jpg' },
];

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {images.map((image) => (
                <Link to={`/picture/${image.id}`} key={image.id} className="photo-item-link">
                    <div className="photo-item">
                        <img src={image.src} alt={`Photo of ${image.id}`} onError={(e) => e.target.style.display = 'none'} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PhotoGrid;
