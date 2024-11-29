import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/main-header/Header.js';
// import Sidebar from '../../components/side-bar/Sidebar.js';
import SearchBarr from '../../components/search-bar/SearchBarr.js';
import './styles.css';

const imageData = [
    { id: 'cave', src: '/ExampleImages/Cave.jpg', title: 'The one that got away', description: 'A scenic cave by the water at sunset.', summary: 'A beautiful cave view, capturing the essence of tranquility by the water.', stockId: 'STK-00001', price: 10.99, profile: { name: 'John Doe' }, formats: ['728 x 410 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [728, 410] },
    { id: 'cityscape', src: '/ExampleImages/Cityscape.jpg', title: 'Sunset', description: 'A bustling cityscape with the sun setting between buildings.', summary: 'Great for urban explorers, this captures city life.', stockId: 'STK-00002', price: 15.99, profile: { name: 'Jane Smith' }, formats: ['960 x 641 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [960, 641] },
    { id: 'animal', src: '/ExampleImages/Animal.jpg', title: 'Wildlife', description: 'A wild animal captured in its natural habitat.', summary: 'A true moment of nature.', stockId: 'STK-00003', price: 14.99, profile: { name: 'Alice Johnson' }, formats: ['1080 x 610 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [1080, 610] },
    { id: 'portrait', src: '/ExampleImages/Portrait.jpg', title: 'Jumping', description: 'A black and white portrait with artistic effects.', summary: 'Perfect for artistic settings.', stockId: 'STK-00004', price: 8.99, profile: { name: 'Chris Evans' }, formats: ['510 x 612 JPG'], orientation: 'vertical', people: 'people', resolution: [510, 612] },
    { id: 'pinkflowers', src: '/ExampleImages/PinkFlowers.jpg', title: 'Pink Blooms', description: 'Beautiful pink flowers in bloom.', summary: 'Ideal for spring decor.', stockId: 'STK-00005', price: 11.99, profile: { name: 'Emily Brown' }, formats: ['1024 x 610 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [1024, 610] },
    { id: 'stairs', src: '/ExampleImages/Stairs.jpg', title: 'Spiral', description: 'A mesmerizing spiral staircase.', summary: 'For architecture enthusiasts.', stockId: 'STK-00006', price: 12.99, profile: { name: 'David Smith' }, formats: ['2000 x 1571 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [2000, 1571] },
    { id: 'turtle', src: '/ExampleImages/Turtle.jpg', title: 'Turtle', description: 'A turtle in a lush green environment.', summary: 'A unique view of wildlife.', stockId: 'STK-00007', price: 13.99, profile: { name: 'Sophia Lee' }, formats: ['704 x 900 JPG'], orientation: 'vertical', people: 'no-people', resolution: [704, 900] },
    { id: 'wedding', src: '/ExampleImages/Wedding.jpg', title: 'Wedding Day', description: 'A couple sharing a precious moment on their wedding day.', summary: 'A beautiful moment captured.', stockId: 'STK-00008', price: 18.99, profile: { name: 'Mark Taylor' }, formats: ['960 x 640 JPG'], orientation: 'horizontal', people: 'people', resolution: [960, 640] },
    { id: 'redpanda', src: '/ExampleImages/RedPanda.jpg', title: 'Red Panda', description: 'An adorable red panda relaxing on a branch.', summary: 'A favorite for animal lovers.', stockId: 'STK-00009', price: 16.99, profile: { name: 'Sarah Connor' }, formats: ['728 x 1099 JPG'], orientation: 'vertical', people: 'no-people', resolution: [728, 1099] },
    { id: 'sunset', src: '/ExampleImages/Sunset.jpg', title: 'Golden Sunset', description: 'A beautiful sunset over a vast landscape.', summary: 'Perfect for any room decor.', stockId: 'STK-00010', price: 19.99, profile: { name: 'Tom Hardy' }, formats: ['1280 x 854 JPG'], orientation: 'horizontal', people: 'no-people', resolution: [1280, 854] },
];

function PicturePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const image = imageData.find(img => img.id === id);
    const [rating, setRating] = useState(0);

    if (!image) {
        return <p>Image not found</p>;
    }

    const currentIndex = imageData.indexOf(image);
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === imageData.length - 1;

    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className="full-page-container">
            <Header />
            <div className="main-content">
                {/* <Sidebar /> */}
                <div className="content-area">
                    {/* <SearchBarr /> */}
                    <div className="picture-page-full">
                        <div className="image-container">
                            <img src={image.src} alt={image.title} className={`full-image ${image.id}`} />
                            {!isFirst && (
                                <button className="nav-button prev-button" onClick={() => navigate(`/picture/${imageData[currentIndex - 1].id}`)}>
                                    ◀
                                </button>
                            )}
                            {!isLast && (
                                <button className="nav-button next-button" onClick={() => navigate(`/picture/${imageData[currentIndex + 1].id}`)}>
                                    ▶
                                </button>
                            )}
                        </div>

                        <div className="details-sidebar">
                            <button className="close-button" onClick={() => navigate(-1)}>×</button>
                            <div className="profile-info">
                                <img src="/BlankProfile.webp" alt="Profile" className="profile-picture" />
                                <span className="profile-name">{image.profile.name}</span>
                            </div>
                            <h2 className="image-title">{image.title}</h2>
                            <p className="image-summary">{image.summary}</p>
                            <p className="image-description">{image.description}</p>
                            <p className="stock-id">{`Stock Photo ID: ${image.stockId}`}</p>

                            <div className="pricing-section">
                                <h3>Purchase Options (CAD)</h3>
                                <div className="price-option">
                                    <input type="radio" name="price" checked readOnly />
                                    <label>{`$${image.price} for this image`}</label>
                                </div>
                                <div className="price-option">
                                    <input type="radio" name="price" />
                                    <label>{`$${(image.price * 0.75).toFixed(2)} for 25 images/month`}</label>
                                </div>
                            </div>

                            <div className="rating-section">
                                <h3>Rate this photo:</h3>
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} onClick={() => handleRating(index + 1)} style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}>
                                        ★
                                    </span>
                                ))}
                                <p>{rating > 0 ? `You rated this photo ${rating} star(s)` : 'No rating yet'}</p>
                            </div>

                            <div className="action-buttons">
                                <button className="save-button">❤️ Save</button>
                                <button className="add-to-cart-button">🛒 Add to Cart</button>
                                <button className="share-button">🔗 Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PicturePage;
