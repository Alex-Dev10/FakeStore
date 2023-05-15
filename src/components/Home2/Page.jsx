import React from 'react'
import NavbarComponent from './Nav/NavbarComponent'
import './Page.css'
import { Products } from './Products/Products'

import { useContext } from 'react'
import { Context1 } from '../../Context/Context'


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
