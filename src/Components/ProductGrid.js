import React from 'react';
import './ProductGrid.css';

const products = [
  {
    name: 'Abstract Vibes',
    artist: 'Jason Smith',
    handle: '@jasonsmith',
    background: 'https://i.imgur.com/W9qVvGf.jpeg',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    stars: 4,
    price: '$129.00'
  },
  {
    name: 'Modern Culture',
    artist: 'Alicia White',
    handle: '@aliciawhite',
    background: 'https://i.imgur.com/S2PVEXK.jpeg',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    stars: 5,
    price: '$149.00'
  },
  {
    name: 'City Noir',
    artist: 'Mike Carter',
    handle: '@mikecarter',
    background: 'https://i.imgur.com/yvYAHZB.jpeg',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    stars: 4,
    price: '$109.00'
  },
  {
    name: 'Mystic Light',
    artist: 'Rachel Lee',
    handle: '@rachellee',
    background: 'https://i.imgur.com/wfYOvJt.jpeg',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    stars: 5,
    price: '$189.00'
  }
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <h2>Popular Artworks</h2>
      <div className="grid">
        {products.map((product, index) => (
          <div className="product-card" key={index} style={{ backgroundImage: `url(${product.background})` }}>
            <div className="product-overlay">
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="artist">
                  <img src={product.avatar} alt="artist" />
                  <div>
                    <p>{product.artist}</p>
                    <span>{product.handle}</span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="stars">
                    {'★'.repeat(product.stars)}{'☆'.repeat(5 - product.stars)}
                  </div>
                  <div className="price">{product.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
