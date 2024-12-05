// src/components/PhotoGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PhotoGrid.css';


const images = [
    { id: 'cave', src: '/Snapshop-Frontend/ExampleImages/Cave.jpg', title: 'The one that got away', description: 'A scenic cave by the water at sunset.', summary: 'A beautiful cave view, capturing the essence of tranquility by the water.', stockId: 'STK-00001', price: 10.99, profile: { name: 'John Doe' }, formats: ['728 x 410 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [728, 410], fileType: 'JPG' },
    { id: 'cityscape', src: '/Snapshop-Frontend/ExampleImages/Cityscape.jpg', title: 'Sunset', description: 'A bustling cityscape with the sun setting between buildings.', summary: 'Great for urban explorers, this captures city life.', stockId: 'STK-00002', price: 15.99, profile: { name: 'Jane Smith' }, formats: ['960 x 641 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [960, 641], fileType: 'JPG' },
    { id: 'animal', src: '/Snapshop-Frontend/ExampleImages/Animal.jpg', title: 'Wildlife', description: 'A wild animal captured in its natural habitat.', summary: 'A true moment of nature.', stockId: 'STK-00003', price: 14.99, profile: { name: 'Alice Johnson' }, formats: ['1080 x 610 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [1080, 610], fileType: 'JPG' },
    { id: 'portrait', src: '/Snapshop-Frontend/ExampleImages/Portrait.jpg', title: 'Jumping', description: 'A black and white portrait with artistic effects.', summary: 'Perfect for artistic settings.', stockId: 'STK-00004', price: 8.99, profile: { name: 'Chris Evans' }, formats: ['510 x 612 JPG'], orientation: 'vertical', people: 'people', resolution: [510, 612], fileType: 'JPG' },
    { id: 'pinkflowers', src: '/Snapshop-Frontend/ExampleImages/PinkFlowers.jpg', title: 'Pink Blooms', description: 'Beautiful pink flowers in bloom.', summary: 'Ideal for spring decor.', stockId: 'STK-00005', price: 11.99, profile: { name: 'Emily Brown' }, formats: ['1024 x 610 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [1024, 610], fileType: 'JPG' },
    { id: 'stairs', src: '/Snapshop-Frontend/ExampleImages/Stairs.jpg', title: 'Spiral', description: 'A mesmerizing spiral staircase.', summary: 'For architecture enthusiasts.', stockId: 'STK-00006', price: 12.99, profile: { name: 'David Smith' }, formats: ['2000 x 1571 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [2000, 1571], fileType: 'JPG' },
    { id: 'turtle', src: '/Snapshop-Frontend/ExampleImages/Turtle.jpg', title: 'Turtle', description: 'A turtle in a lush green environment.', summary: 'A unique view of wildlife.', stockId: 'STK-00007', price: 13.99, profile: { name: 'Sophia Lee' }, formats: ['704 x 900 JPG'], orientation: 'vertical', people: 'no-people', resolution: [704, 900], fileType: 'JPG' },
    { id: 'wedding', src: '/Snapshop-Frontend/ExampleImages/Wedding.jpg', title: 'Wedding Day', description: 'A couple sharing a precious moment on their wedding day.', summary: 'A beautiful moment captured.', stockId: 'STK-00008', price: 18.99, profile: { name: 'Mark Taylor' }, formats: ['960 x 640 JPG'], orientation: 'horizontal', people: 'people', resolution: [960, 640], fileType: 'JPG' },
    { id: 'redpanda', src: '/Snapshop-Frontend/ExampleImages/RedPanda.jpg', title: 'Red Panda', description: 'An adorable red panda relaxing on a branch.', summary: 'A favorite for animal lovers.', stockId: 'STK-00009', price: 16.99, profile: { name: 'Sarah Connor' }, formats: ['728 x 1099 JPG'], orientation: 'vertical', people: 'no-people', resolution: [728, 1099], fileType: 'JPG' },
    { id: 'sunset', src: '/Snapshop-Frontend/ExampleImages/Sunset.jpg', title: 'Golden Sunset', description: 'A beautiful sunset over a vast landscape.', summary: 'Perfect for any room decor.', stockId: 'STK-00010', price: 19.99, profile: { name: 'Tom Hardy' }, formats: ['1280 x 854 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [1280, 854], fileType: 'JPG' },
];

const classifyResolution = (resolution) => {
    const [width, height] = resolution; // Use the resolution array directly
    const megapixels = (width * height) / 1_000_000; // Calculate MP

    if (megapixels <= 1) return 'small';
    if (megapixels <= 6) return 'medium';
    return 'large';
};

const applyFilters = (images, filters = {}, searchQuery) => {
    const sanitizedQuery = String(searchQuery || '').trim();
    return images.filter((image) => {
        let matchesOrientation = true;
        let matchesPeople = true;
        let matchesResolution = true;
        let matchesSearch = true;
        let matchesType = true;

        // Check the orientation filter if specified
        if (filters.orientation) {
            matchesOrientation = image.orientation === filters.orientation;
        }

        // Check the people filter if specified
        if (filters.people) {
            matchesPeople = image.people === filters.people;
        }

        if (filters.size) {
            const resolutionCategory = classifyResolution(image.resolution);
            matchesResolution = resolutionCategory === filters.size;
        }

        if (filters.fileType) {
            matchesType = image.fileType === filters.fileType;
        }

        if (sanitizedQuery) {
            const lowerCaseQuery = sanitizedQuery.toLowerCase();
            matchesSearch =
                image.description.toLowerCase().includes(lowerCaseQuery) ||
                image.title.toLowerCase().includes(lowerCaseQuery) ||
                image.summary.toLowerCase().includes(lowerCaseQuery);
        }

        // Include the image only if it matches all specified filters
        return matchesSearch && matchesOrientation && matchesPeople && matchesResolution && matchesType;
    });
};

const PhotoGrid = ({ filters, searchQuery }) => {
    console.log(filters); // Debug: check filters
    const filteredImages = applyFilters(images, filters, searchQuery);
    return (
        <div className="photo-grid">
            {filteredImages.map((image) => (
                <Link to={`/picture/${image.id}`} key={image.id} className="photo-item-link">
                    <div className="photo-item">
                        <img src={image.src} alt={`Photo of ${image.id}`} onError={(e) => e.target.style.display = 'none'} />
                        <div class="photo-text">
                            <div class="title">{image.title}</div>
                            <div className="name">{image.profile.name}</div>
                            <div class="price">${image.price}</div>
                            <div class="resolutions">{image.formats[0]}</div>
                            {/* <div class="resolutions">{image.formats[1]}</div> */}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PhotoGrid;
