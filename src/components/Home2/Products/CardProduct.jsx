import React, { useContext, useState } from 'react';
import './Products.css';




export const CardProduct = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);







  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className='card'>
      <div className='items'>
        <h5>{product.id}</h5>
        <h4>{product.title}</h4>
        <img src={product.image} alt='' />
        <p>{product.price}</p>
        <p>{product.category}</p>

        <button onClick={toggleDescription}>
          {showDescription ? 'Cerrar' : 'Ver más'}
        </button>
    
        {showDescription && <p  className='description'>{product.description}</p>}
      </div>
    </div>
  );
};
