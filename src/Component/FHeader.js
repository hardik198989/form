import React from 'react'
import { CgSearch } from "react-icons/cg";
import { FiUser, FiLock, FiBookOpen } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"




function FHeader() {
  return (
    <div className='main_header'>
            <Container>
                <Row>
                    <div className='top_header'>
                        <div className='logo_header d-flex'>
                            <a href="#home">
                                <img src={require('../image/vouager_logo.png')} alt="" width="100px" />
                            </a>
                            <ul className='d-flex liststyli'>
                                {/* <Link ><li>Home</li></Link> */}
                                <Link to={'cart'}><li>product details</li></Link>
                                {/* <Link><li>About us</li></Link> */}
                            </ul>
                            <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" placeholder='Search Bar....!' style={{ width: '400px', height: '50px', marginTop: '10px' }} />
                            <div className='social_icon  d-flex'>
                                <CgSearch />
                                <FiUser />
                                <FiBookOpen />
                                <FiLock />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            </div>
  )
}

export default FHeader