import React from 'react'
import { Link } from "react-router-dom"



function Header() {
  return (
    <div className='rick_h'>
        <Link to='Rickmorty'>First Program</Link>
        <Link to='Sidebar'>Secound Program</Link>
        <Link to='Product'>Product</Link>
    </div>
  )
}
// function Feheader(){
//   return(
//     <div className='main_header'>
//             <Container>
//                 <Row>
//                     <div className='top_header'>
//                         <div className='logo_header d-flex'>
//                             <a href="#home">
//                                 <img src={require('../image/vouager_logo.png')} alt="" width="100px" />
//                             </a>
                            
//                             <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" placeholder='Search Bar....!' style={{ width: '400px', height: '50px', marginTop: '10px' }} />
//                             <div className='social_icon'>
//                                 <CgSearch />
//                                 <FiUser />
//                                 <FiBookOpen />
//                                 <FiLock />
//                             </div>
//                         </div>
//                     </div>
//                 </Row>
//             </Container>
//             </div>
//   )
// }

export default Header