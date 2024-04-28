import '../styles/Navbar.css'
import { BiGridAlt } from "react-icons/bi";

import { categories } from '../assets/Data'
import { Link } from 'react-router-dom';
// import { useState } from 'react';


function Navbar() {


  return (

    <nav className="navbar">
      <h1>Tech Savy</h1>
      <div className="btn">
        <Link to="/admin" style={{
          paddingRight: "20px"
        }}>Admin</Link>

        <Link to="/" className='home' style={{
          color: 'white',
          fontSize: '1.2rem'
        }}>Home</Link>

        <div className='categories'>

          <p className='category' style={{
            fontSize: '1.5rem'
          }}>Category</p>
          {/* <BiGridAlt className='gridIcon'/> */}

          <div className="box">
            {categories.map(category => (
              <div key={category.id} className='cat'>
                <Link to={`/category/${category.category}`} ><p>{category.category}</p></Link>
              </div>
            ))}
          </div>



        </div>

      </div>
    </nav>

  )
}

export default Navbar
