// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom"
import { addtocart } from '../Cart/Cartslice';
import { useDispatch} from 'react-redux'





export default function Product() {
     const [pro, setpro] = useState([]);
     // useEffect(()=>{
     //      axios.get('https://dummyjson.com/products')
     //      .then(res=>{
     //           setpro(res.data)
     //           console.log(res.data);
     //      })
     //      .catch(error=>{
     //           console.log(error);
     //      })
     // })
     useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await fetch('https://dummyjson.com/products');
                const result = await reponse.json();
                setpro(result.products);
                console.log(result.products);
            }
            catch (error) {
                console.error('error fetching data:', error)
            }

        };
        fetchData();
    }, [])
    const dispatch = useDispatch()
    
     return (
          <div>

          <div className='pro_item'>
               
               {
                    pro.map((item) => {
                         return (
                              
                              <>
                                   <div className="product ">
                                        <div className="pro_img ">
                                        <Link to={`single/${item.id}`}> <img src={item.thumbnail} alt="" /></Link>
                                        </div>
                                        
                                        <div className="pro_info">
                                             <div className="pro_name">
                                                  <p>{item.title}</p>
                                             </div>
                                             <div className="pro_brand">
                                                  <h6 style={{ marginBottom: 0 }}>Brand:<span>{item.brand}</span></h6>
                                             </div>
                                             <div className="pro_rating">
                                                  <p>{item.rating}<span><FaStar></FaStar></span></p>
                                             </div>
                                             <div className="pro_price d-flex">
                                                  <h5><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{item.price}</h5>
                                                  <strike className="ms-2">{item.price + 50}</strike><span className='ms-2'>{item.discountPercentage}%</span>
                                             </div>
                                             <div>
                                                  <button className='btn' onClick={()=>dispatch(addtocart(item))}><Link to={'cart'}>checkout</Link></button>
                                             </div>
                                        </div>
                                   </div>
                              </>
                         )
                    })
               }
          </div>
          </div>
     )
}