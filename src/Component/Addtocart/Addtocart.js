import React from 'react'
import { useSelector } from 'react-redux'

function Addtocart() {
  const allcart = useSelector((state) => state.cart)
  console.log('=================================================', allcart.quantify)
  return (
    <>
      <div className='bg-gray'>
        <div className='container'>
          <h1 className='text-center'>shoping cart</h1>
          <div className='flex flex-column'>
            <div className='md'>
              <div className='bg-white'>
                <table className='full'>
                  <thead>
                    <tr className='price_cart d-flex'>
                      <th>product</th>
                      <th>price</th>
                      <th>quantify</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allcart.cart.map((item) => (
                      <tr key={item}>
                        <td className='producter'>
                          <div className='d-flex product_img'>
                            <img className='p-2' src={item.thumbnail} alt='img_thumb' />
                            {/* <span className='font'>{item.title}</span> */}
                          </div>
                        </td>
                        {/* <td className='text-center'>${item.price}</td>
                        <td>
                          <div className='d-flex text-left'>
                            <button className='border text-center'>+</button>
                            <span className='text-center'>{allcart.quantify}</span>
                            <button className='btner'>-</button>
                          </div>
                        </td>
                        <td className='py-4'>{item.total}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='main_product'>
              <div className='bg-white'>
                <h2 className='text-lg'>summary</h2>
                <div className='flex justify-between'>
                  <span>subtotal</span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addtocart