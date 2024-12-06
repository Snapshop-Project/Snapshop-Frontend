import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faArrowLeft,
  faArrowRight,
  faBookmark,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

function Modal({ image, closeModal, onPrevious, onNext, isFirst, isLast }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-button" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Navigation Arrows */}
        {!isFirst && (
          <button className="modal-nav-button prev" onClick={onPrevious}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        {!isLast && (
          <button className="modal-nav-button next" onClick={onNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}

        {/* Fullscreen Image */}
        <div className="modal-image-container">
          <img src={image.src} alt={image.title} className="modal-image" />
        </div>

        {/* Snapshop Watermark */}
        <div className="snapshop-logo">Snapshop</div>

        {/* Toolbar */}
        <div className="modal-toolbar">
          <button className="toolbar-button">
            <FontAwesomeIcon icon={faBookmark} /> Bookmark
          </button>
          <button className="toolbar-button">
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
