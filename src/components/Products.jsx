import React from 'react';
import '../styles/Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'In-house R&D-driven Designs',
      description: 'Our dedicated research team develops innovative designs for lithium-ion cell caps and cases that meet the highest standards of performance and safety.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Durability & Safety',
      description: 'Our components are engineered for maximum durability and safety, ensuring reliable performance throughout the battery lifecycle.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Manufacturability',
      description: 'We optimize our designs for efficient mass production, helping cell manufacturers scale their operations with reliable components.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Global Quality Standards',
      description: 'All our products align with international quality and certification standards, ensuring compatibility with global manufacturing requirements.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2oQ-T8714V6ZZ8g6B_eGph8LXqIAwYhgYA&s?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Technology & Innovation</h2>
        <p className="section-subtitle">Our commitment to excellence in lithium-ion cell component design</p>
        
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className="product-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;