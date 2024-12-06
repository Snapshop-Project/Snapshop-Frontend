import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/main-header/Header';
import ImageContainer from '../../components/image-container/ImageContainer';
import DetailsSidebar from '../../components/details-sidebar/DetailsSidebar';
import Modal from '../../components/modal/ImageModal'; 
import imageData from '../../data/imageData';
import './styles.css';

function PicturePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const image = imageData.find((img) => img.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [rating, setRating] = useState(0);

    const currentIndex = image ? imageData.indexOf(image) : -1;
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === imageData.length - 1;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft' && !isFirst) {
                navigate(`/Snapshop-Frontend/picture/${imageData[currentIndex - 1].id}`);
            } else if (event.key === 'ArrowRight' && !isLast) {
                navigate(`/Snapshop-Frontend/picture/${imageData[currentIndex + 1].id}`);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isFirst, isLast, navigate]);

    if (!image) {
        return <p>Image not found</p>;
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="full-page-container">
            <Header />
            <div className="main-content">
                <div className="content-area">
                    <div className="picture-page-full">
                        {/* Image Container */}
                        <ImageContainer
                            image={image}
                            onClick={openModal}
                            onPrevious={() =>
                                navigate(`/Snapshop-Frontend/picture/${imageData[currentIndex - 1].id}`)
                            }
                            onNext={() =>
                                navigate(`/Snapshop-Frontend/picture/${imageData[currentIndex + 1].id}`)
                            }
                            isFirst={isFirst}
                            isLast={isLast}
                        />

                        {/* Sidebar */}
                        <DetailsSidebar
                            image={image}
                            isBookmarked={isBookmarked}
                            toggleBookmark={() => setIsBookmarked(!isBookmarked)}
                            rating={rating}
                            setRating={setRating}
                        />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <Modal
                    image={image}
                    closeModal={closeModal}
                    onPrevious={() =>
                        !isFirst &&
                        navigate(`/Snapshop-Frontend/picture/${imageData[currentIndex - 1].id}`)
                    }
                    onNext={() =>
                        !isLast &&
                        navigate(`/Snapshop-Frontend/picture/${imageData[currentIndex + 1].id}`)
                    }
                    isFirst={isFirst}
                    isLast={isLast}
                />
            )}
        </div>
    );
}

export default PicturePage;
