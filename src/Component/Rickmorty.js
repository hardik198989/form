import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Rickmorty() {
    const [rest, setrest] = useState([]);
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setrest(data.results);
            })

    }, [])
    return (
        <div className='app_morty'>
            <Container>
                <Row>
                    <div className='rickapi'>
                        <h1 className='text-center'>The Rick and Morty API</h1>
                    </div>
                    {
                        rest.map((item) => {
                            // const circlecolor = item.status ==='alive' ? 'green'  : item.statusn === 'Dead' ? 'red' : 'grey';
                            return (
                                
                                <Col lg={6}>
                                    <div className='rick_img'>
                                        <div className='main_item d-flex'>
                                            <div><img
                                                src={item.image}
                                                class="img-fluid rounded-top"
                                                alt=""
                                            />
                                            </div>  
                                            <div className='alan'>
                                                <div className='section'> 
                                                    <a className='ex_link' href='https://rickandmortyapi.com/api/character/260'><h2 className='tit' style={{fontWeight:'700',marginTop:'20px'}}>{item.name}</h2></a>
                                                    <div>
                                                    <p >{item.status} - {item.species}</p>

                                                    </div>
                                                    {/* style={{ backgroundColor: circlecolor,borderRadius:'10%',width:'12px', height:'12px', marginRight:'16px'}} */}
                                                    <div className='location'>
                                                        <span style={{color:'#9e9e9e'}}>Last known location:</span><br></br>
                                                        <span>{item.origin.name}</span>
                                                    </div>
                                                    <div className='maic'>
                                                        <span style={{color:'#9e9e9e'}}>First seen in:</span><br></br>
                                                        <span>{item.location.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Col>


                            )
                        })
                    }
                </Row>
            </Container>
        </div>

    )
}

export default Rickmorty