import React from "react";
import "../../App.css"; // Link your CSS file here
import { FaExchangeAlt, FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";

function HpBuynow() {
  return (
    
    <div className="product-page"  style={{ width: '100%', height: '100%', backgroundColor: '#808080' }}>
      {/* Header */}
      <header className="header">
        <h1>Croma</h1>
        <input type="text" placeholder="What are you looking for?" />
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Image Gallery (Left Column) */}
       

        {/* Product Image (Right Column) */}
        <div className="product-image">
          <img
            src="public/images/hp1.webp" style={{width:'230px',height:'230px'}}
            alt="Laptop Image"
            className="main-image"

          />
        </div>
        <div className="product-image">
          <img
            src="public/images/hp11.webp" style={{width:'260px',height:'260px'}}
            alt="Laptop Image"
            className="main-image"

          />
        </div>

        {/* Product Details */}
        <div className="product-details">
        <div class="absolute top-14 right-4 text-right p-14">

          <h2>
          
            Lenovo IdeaPad 1 15IGL7 Intel Celeron Laptop (8GB, 512GB SSD, Windows 11 Home, 15.6 inch)
          </h2>
          <p className="price">
            ₹24,990.00 <span className="mrp">MRP: ₹47,290.00</span>{" "}
            <span className="discount">(47.16% off)</span>
          </p>
          <p className="emi">₹1,176/mo EMI Options</p>

          <div className="specifications">
            <h4>Specifications</h4>
            <ul>
              <li><strong>RAM:</strong> 8GB</li>
              <li><strong>Storage:</strong> 512GB SSD</li>
              <li><strong>OS:</strong> Windows 11 Home</li>
              <li><strong>Screen Size:</strong> 15.6 inch</li>
            </ul>
          </div>

          <button
                  className="bg-blue-600 px-4 py-1 rounded text-white hover:bg-white"
                  onClick={() => handleBuyNow(product)} // Call handleBuyNow on button click
                >
                  Purchase
                </button>
                </div>
          </div>
        </div>
      </div>
    
  );
}

export default HpBuynow;
