import React  from 'react';
import './SaleItemList.css';

function SaleItemList({ items}) {

  return (
    <div className="sale-item-grid-container">
      <h2>Sales</h2>
      {items.length === 0 ? <span>No sales have been made...yet!</span> : ""}
      <div className="sale-item-grid">
        {items.map((item) => (
          <div key={item.id} className="sale-item-card">
            <div className="sale-item-header">
              <span className="sale-item-name">{item.name}</span>
            </div>
            <div className="sale-item-image">
              <img src={item.src} alt={item.name} className="sale-item-img" />
            </div>
            <div className="sale-item-price">${item.price.toFixed(2)}</div>
            <div className="sale-item-purchaser">{item.purchaser}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaleItemList;
