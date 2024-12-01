import React from 'react';
import './SaleItemList.css';

function SaleItemList({ items }) {
    return (
        <div className="sales-item-grid">
            {items.map((item) => (
                <div key={item.id} className="sales-item-card">
                    <div className="sales-item-image">
                        <img src={item.src} alt={item.name} className="sales-item-img" />
                    </div>
                    <div className="sales-item-details">
                      <div className="sales-item-info">
                        <div className="sales-item-name">{item.name}</div>
                        <div className="sales-item-purchaser">{item.purchaser}</div>
                        <div className="sales-item-price">${item.price.toFixed(2)}</div>
                      </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SaleItemList;
