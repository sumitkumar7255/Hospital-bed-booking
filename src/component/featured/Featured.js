import React from 'react';
import "./Featured.css";

function Featured() {
  return (
    <div className='featured'>
    <div className='featuredItem'>
       <img src='https://mcdmag.com/wp-content/uploads/2013/10/hospital-entrance-exterior-medium-4.jpg' alt='' className='featuredImg'></img> 
       <div className='featuredTitle'>
        <h1>Hospital Building</h1>
        <h2>facility within a hospital</h2>
       </div>
     </div> 
     <div className='featuredItem'>
       <img src='https://mcdmag.com/wp-content/uploads/2013/10/hospital-entrance-exterior-medium-4.jpg' alt='' className='featuredImg'></img> 
       <div className='featuredTitle'>
        <h1>Hospital Campus</h1>
        <h2>an aseptic environment</h2>
       </div>
     </div> 
     <div className='featuredItem'>
       <img src='https://mcdmag.com/wp-content/uploads/2013/10/hospital-entrance-exterior-medium-4.jpg' alt='' className='featuredImg'></img> 
       <div className='featuredTitle'>
        <h1>Hospital Laboratory</h1>
        <h2>surgical operations,carried </h2>
       </div>
     </div>    
    </div>
  )
}

export default Featured;