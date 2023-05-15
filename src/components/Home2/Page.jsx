import React from 'react'
import NavbarComponent from './Nav/NavbarComponent'
import './Page.css'
import { Products } from './Products/Products'



export const Page = () => {



  return (
    <div className='MainPage' >

<NavbarComponent/>


<div className='pages'>
<Products/>



</div>




    </div>
  )
}
