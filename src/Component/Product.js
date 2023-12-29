import React from 'react'
import Sidebar from './Sidebar'

import Home from './Home'

function Product() {
      return (
    <div className='main_product'>
     <div className='container'>
          <div className='row'>
               <div className='col-3'>
                    <Sidebar></Sidebar>
               </div>
               <div className='col-9'>
                    
                    <Home></Home>
                    
               </div>
          </div>
     </div>
    </div>
  )
}

export default Product