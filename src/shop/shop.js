import React from 'react'
import Navbar from '../navbar/Nav'
import Footer from '../navbar/Footer'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Bar from './ShopBar';



const Shop = () => {
  return (
    <div>
      <Navbar/>
        <div className = 'pt-20 pb-20 h-screen'>
        <Bar/>
         

        </div>
      
      <Footer/>
    </div>
  )
}

export default Shop