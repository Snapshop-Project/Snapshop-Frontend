import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark as regularBookmark,
    faShoppingCart,
    faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

import './DetailsSidebar.css';

function DetailsSidebar({
    image,
    isBookmarked,
    toggleBookmark,
    rating,
    setRating,
}) {
    return (
        <div className="details-sidebar">
            <h2 className="image-title">{image.title}</h2>
            <p className="image-description">{image.description}</p>
            <p className="stock-id">{`Stock Photo ID: ${image.stockId}`}</p>
            <h3>Price: ${image.price} CAD</h3>
            <div className="action-buttons">
                <button
                    className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}
                    onClick={toggleBookmark}
                >
                    <FontAwesomeIcon icon={regularBookmark} />{' '}
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </button>
                <button className="add-to-cart-button">
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
                <button className="share-button">
                    <FontAwesomeIcon icon={faShareAlt} /> Share
                </button>
            </div>
        </div>
    );
}

export default DetailsSidebar;
