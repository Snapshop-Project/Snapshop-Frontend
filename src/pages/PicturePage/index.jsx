import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/main-header/Header.js';
// import Sidebar from '../../components/side-bar/Sidebar.js';
import SearchBarr from '../../components/search-bar/SearchBarr.js';
import './styles.css';

const imageData = [
    { id: 'cave', src: '/ExampleImages/Cave.jpg', title: 'The one that got away', description: 'A scenic cave by the water at sunset.', summary: 'A beautiful cave view, capturing the essence of tranquility by the water.', stockId: 'STK-00001', price: 10.99, profile: { name: 'John Doe' }, formats: ['8256x3174 JPG', '4000x2000 JPG'] },
    { id: 'cityscape', src: '/ExampleImages/Cityscape.jpg', title: 'Sunset', description: 'A bustling cityscape with the sun setting between buildings.', summary: 'Great for urban explorers, this captures city life.', stockId: 'STK-00002', price: 15.99, profile: { name: 'Jane Smith' }, formats: ['6000x4000 JPG', '1920x1080 JPG'] },
    { id: 'animal', src: '/ExampleImages/Animal.jpg', title: 'Wildlife', description: 'A wild animal captured in its natural habitat.', summary: 'A true moment of nature.', stockId: 'STK-00003', price: 14.99, profile: { name: 'Alice Johnson' }, formats: ['5000x3500 JPG', '2000x1500 JPG'] },
    { id: 'portrait', src: '/ExampleImages/Portrait.jpg', title: 'Jumping', description: 'A black and white portrait with artistic effects.', summary: 'Perfect for artistic settings.', stockId: 'STK-00004', price: 8.99, profile: { name: 'Chris Evans' }, formats: ['3000x3000 JPG', '1200x1200 JPG'] },
    { id: 'pinkflowers', src: '/ExampleImages/PinkFlowers.jpg', title: 'Pink Blooms', description: 'Beautiful pink flowers in bloom.', summary: 'Ideal for spring decor.', stockId: 'STK-00005', price: 11.99, profile: { name: 'Emily Brown' }, formats: ['4000x3000 JPG', '1600x1200 JPG'] },
    { id: 'stairs', src: '/ExampleImages/Stairs.jpg', title: 'Spiral', description: 'A mesmerizing spiral staircase.', summary: 'For architecture enthusiasts.', stockId: 'STK-00006', price: 12.99, profile: { name: 'David Smith' }, formats: ['3500x3500 JPG', '1400x1400 JPG'] },
    { id: 'turtle', src: '/ExampleImages/Turtle.jpg', title: 'Turtle', description: 'A turtle in a lush green environment.', summary: 'A unique view of wildlife.', stockId: 'STK-00007', price: 13.99, profile: { name: 'Sophia Lee' }, formats: ['3000x2000 JPG', '1200x800 JPG'] },
    { id: 'wedding', src: '/ExampleImages/Wedding.jpg', title: 'Wedding Day', description: 'A couple sharing a precious moment on their wedding day.', summary: 'A beautiful moment captured.', stockId: 'STK-00008', price: 18.99, profile: { name: 'Mark Taylor' }, formats: ['5000x3333 JPG', '1600x1067 JPG'] },
    { id: 'redpanda', src: '/ExampleImages/RedPanda.jpg', title: 'Red Panda', description: 'An adorable red panda relaxing on a branch.', summary: 'A favorite for animal lovers.', stockId: 'STK-00009', price: 16.99, profile: { name: 'Sarah Connor' }, formats: ['3000x2000 JPG', '1200x800 JPG'] },
    { id: 'sunset', src: '/ExampleImages/Sunset.jpg', title: 'Golden Sunset', description: 'A beautiful sunset over a vast landscape.', summary: 'Perfect for any room decor.', stockId: 'STK-00010', price: 19.99, profile: { name: 'Tom Hardy' }, formats: ['6000x4000 JPG', '1920x1280 JPG'] },
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
                    <SearchBarr />
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
                                <img src="/logo.jpg" alt="Profile" className="profile-picture" />
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
