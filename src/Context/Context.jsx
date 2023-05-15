import React, { createContext } from 'react'
import { useState } from 'react';


export const Context1 = createContext();



export const Context = ({children}) => {




const data=[]



  return (
    <div>

<Context1.Provider   value={data} >

{children}

</Context1.Provider>


    </div>
  )
}
