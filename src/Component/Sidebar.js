import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';

function Sidebar() {
    const [side, setside] = useState([]);
    

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(res => {
                setside(res.data)
            })
            .catch(error => {
                setside('error', error)
            })

    }, []);
    
    return (
        <div className='main_header'>
            <div className='container'>
                <div className='row '>
                    <div className='col'>
                        <h5>
                            vouager
                        </h5>
                        <p>CATEGORIES</p>
                        {
                            side.map((item) => {
                                return (
                                    <>

                                        <Nav defaultActivekey="/home" className="flex-column">
                                            <Nav.Link href="/home">{item}</Nav.Link>

                                        </Nav>


                                    </>
                                )
                            })
                        }
                    </div>
                    
                </div>


            </div>


        </div>

    )
}

export default Sidebar