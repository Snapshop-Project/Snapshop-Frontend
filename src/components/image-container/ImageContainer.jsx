import React from 'react';
import './ImageContainer.css';

function ImageContainer({ image, onClick, onPrevious, onNext, isFirst, isLast }) {
    return (
        <div className="image-container" onClick={onClick}>
            <img src={image.src} alt={image.title} className="full-image" />
            {!isFirst && (
                <button className="nav-button prev-button" onClick={onPrevious}>
                    ◀
                </button>
            )}
            {!isLast && (
                <button className="nav-button next-button" onClick={onNext}>
                    ▶
                </button>
            )}
        </div>
    );
}

export default ImageContainer;
