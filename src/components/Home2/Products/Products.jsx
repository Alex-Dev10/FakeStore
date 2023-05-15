import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CardProduct } from './CardProduct';
import './Products.css';
import { Context1 } from '../../../Context/Context';


export const Products = () => {

const [showcategories] = useContext(Context1)
  const [products, setProducts] = useState([]);//estado de la lista de productos
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');



  const productsList = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const fetchCategories = () => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    productsList();
    fetchCategories();
  }, []);




  const handleCategoryChange = (category) => {     
    setSelectedCategory(category);
  };// Funciona encargada de controlar el cambio de categoria y ahi se almacena la categoria que he seleccionado


  const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory): products;
// en base a la categoria seleccionada se hace un filtrado a products mostrando los  prodcutos con lacategoria 
// o si no ay ninguna se muestran todos los productos

  return (
    <div>
{showcategories &&
      <div className='categories'>
        <h3>Categories</h3>
        <ul>
          
          <li
            className={selectedCategory === '' ? 'active' : ''}
            onClick={() => handleCategoryChange('')}
          >
            All
          </li>

          {categories.map((category) => (
            <li
             
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}

        </ul>
      </div>
    }
      <div className='cardContainer'>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
