import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='Home'>

      <div className='container'>

             <h1 className='display-4 text-center' id='title'  >Fake Store</h1>

             <h3 className='text-center'>¡Tu compra perfecta a un clic de distancia!</h3>

             <div className='text-center mt-4'>
               
             <Link to = "/Home" >  <button className='btn btn-primary btn-lg btn-moving'>Buy</button></Link>
               
             </div>

      </div>

    </div>
  );
};

