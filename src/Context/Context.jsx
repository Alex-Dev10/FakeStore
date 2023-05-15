import React, { createContext } from 'react'
import { useState } from 'react';


export const Context1 = createContext();



export const Context = ({children}) => {

const [showcategories, setshowcategories] = useState(false)


const data=[showcategories, setshowcategories]



  return (
    <div>

<Context1.Provider   value={data} >

{children}

</Context1.Provider>


    </div>
  )
}
