// src/components/PhotoGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PhotoGrid.css';


const images = [
    { id: 'cave', src: '/ExampleImages/Cave.jpg', title: 'The one that got away', description: 'A scenic cave by the water at sunset.', summary: 'A beautiful cave view, capturing the essence of tranquility by the water.', stockId: 'STK-00001', price: 10.99, profile: { name: 'John Doe' }, formats: ['8256 x 3174 JPG', '4000 x 2000 JPG'] },
    { id: 'cityscape', src: '/ExampleImages/Cityscape.jpg', title: 'Sunset', description: 'A bustling cityscape with the sun setting between buildings.', summary: 'Great for urban explorers, this captures city life.', stockId: 'STK-00002', price: 15.99, profile: { name: 'Jane Smith' }, formats: ['6000 x 4000 JPG', '1920 x 1080 JPG'] },
    { id: 'animal', src: '/ExampleImages/Animal.jpg', title: 'Wildlife', description: 'A wild animal captured in its natural habitat.', summary: 'A true moment of nature.', stockId: 'STK-00003', price: 14.99, profile: { name: 'Alice Johnson' }, formats: ['5000 x 3500 JPG', '2000 x 1500 JPG'] },
    { id: 'portrait', src: '/ExampleImages/Portrait.jpg', title: 'Jumping', description: 'A black and white portrait with artistic effects.', summary: 'Perfect for artistic settings.', stockId: 'STK-00004', price: 8.99, profile: { name: 'Chris Evans' }, formats: ['3000 x 3000 JPG', '1200 x 1200 JPG'] },
    { id: 'pinkflowers', src: '/ExampleImages/PinkFlowers.jpg', title: 'Pink Blooms', description: 'Beautiful pink flowers in bloom.', summary: 'Ideal for spring decor.', stockId: 'STK-00005', price: 11.99, profile: { name: 'Emily Brown' }, formats: ['4000 x 3000 JPG', '1600 x 1200 JPG'] },
    { id: 'stairs', src: '/ExampleImages/Stairs.jpg', title: 'Spiral', description: 'A mesmerizing spiral staircase.', summary: 'For architecture enthusiasts.', stockId: 'STK-00006', price: 12.99, profile: { name: 'David Smith' }, formats: ['3500 x 3500 JPG', '1400 x 1400 JPG'] },
    { id: 'turtle', src: '/ExampleImages/Turtle.jpg', title: 'Turtle', description: 'A turtle in a lush green environment.', summary: 'A unique view of wildlife.', stockId: 'STK-00007', price: 13.99, profile: { name: 'Sophia Lee' }, formats: ['3000 x 2000 JPG', '1200 x 800 JPG'] },
    { id: 'wedding', src: '/ExampleImages/Wedding.jpg', title: 'Wedding Day', description: 'A couple sharing a precious moment on their wedding day.', summary: 'A beautiful moment captured.', stockId: 'STK-00008', price: 18.99, profile: { name: 'Mark Taylor' }, formats: ['5000 x 3333 JPG', '1600 x 1067 JPG'] },
    { id: 'redpanda', src: '/ExampleImages/RedPanda.jpg', title: 'Red Panda', description: 'An adorable red panda relaxing on a branch.', summary: 'A favorite for animal lovers.', stockId: 'STK-00009', price: 16.99, profile: { name: 'Sarah Connor' }, formats: ['3000 x 2000 JPG', '1200 x 800 JPG'] },
    { id: 'sunset', src: '/ExampleImages/Sunset.jpg', title: 'Golden Sunset', description: 'A beautiful sunset over a vast landscape.', summary: 'Perfect for any room decor.', stockId: 'STK-00010', price: 19.99, profile: { name: 'Tom Hardy' }, formats: ['6000 x 4000 JPG', '1920 x 1280 JPG'] },
];

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {images.map((image) => (
                <Link to={`/picture/${image.id}`} key={image.id} className="photo-item-link">
                    <div className="photo-item">
                        <img src={image.src} alt={`Photo of ${image.id}`} onError={(e) => e.target.style.display = 'none'} />
                        <div class="photo-text">
                            <div class="title">{image.title}</div>
                            <div class="price">${image.price}</div>
                            <div class="resolutions">{image.formats[0]},</div>
                            <div class="resolutions">{image.formats[1]}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PhotoGrid;
