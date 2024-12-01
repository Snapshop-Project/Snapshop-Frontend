import './SalesPage.css'; // Optional: Create a corresponding CSS file for styling
import Header from '../../components/main-header/Header.js';
import Grid2 from '@mui/material/Grid2';
import SaleItemList from '../../components/sale-item-list/SaleItemList.jsx';
import React from 'react';

const items = [
    // { id: 'cave', src: '/ExampleImages/Cave.jpg', name: 'The one that got away', format: '1920x1080 (JPEG)', price: 10.99 },
    // { id: 'cityscape', src: '/ExampleImages/Cityscape.jpg', name: 'Sunset', format: '4K (PNG)', price: 15.99 },
    // { id: 'animal', src: '/ExampleImages/Animal.jpg', name: 'Morning Hike', format: '1920x1080 (JPEG)', price: 12.99 },
    // { id: 'portrait', src: '/ExampleImages/Portrait.jpg', name: 'Jumping', format: '1080x720 (JPEG)', price: 8.99 },
    { id: 'RushingFalls', src: '/ExampleImages/RushingFalls.jpg', name: 'Rushing Falls', purchaser: 'Purchased by: John Deer', price: 17.99 },
    { id: 'RushingFalls', src: '/ExampleImages/RushingFalls.jpg', name: 'Rushing Falls', purchaser: 'Purchased by: Ron McDonald', price: 17.99 },
    { id: 'RushingFalls', src: '/ExampleImages/RushingFalls.jpg', name: 'Rushing Falls', purchaser: 'Purchased by: Burgess King', price: 17.99 },
];

const SalesPage = () => {
    return (
        <div className="sales-app-container">
            <Header />
            <div className="sales-main-content">
                {/* First Box: Sales */}
                <div className="sales-content-area">
                    <h2>Sales</h2>
                    {/* <Grid2 item xs={10}> */}
                        <SaleItemList items={items} />
                    {/* </Grid2> */}
                </div>
                {/* Second Box: Purchases */}
                <div className="sales-content-area">
                    <h2>Purchases</h2>
                    {/* Add content for purchases here later */}
                </div>
            </div>
        </div>
    );
};

export default SalesPage;

