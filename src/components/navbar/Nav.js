import React,{useState} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom';


const Nav = () => {
  const[HamShow,setHamShow] = useState(false);
  
  return (
    <>
      <section className='navbar-bg'>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand" >Hound-Force</a>
    <button className="navbar-toggler primary-green" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{setHamShow(!HamShow)}}>
      <span className="navbar-toggler-icon  "></span>
    </button>
    <div className={ `collapse navbar-collapse ${HamShow?"show":""}   `}   >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/" className="nav-link active pe-4" aria-current="page" >Home</Link> 
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link pe-4 " aria-current="page" >About</Link>
        </li>
        <li className="nav-item">
          <Link to='/portfolio' className="nav-link pe-4 " aria-current="page" >Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link pe-4" aria-current="page" >Contact</Link>
        </li>
       
        
          
      </ul>
      
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Nav