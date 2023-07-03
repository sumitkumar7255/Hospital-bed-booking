import React from 'react';
import "./Searchitem.css";
import { Link } from 'react-router-dom';

const Searchitem = () => {
  return (
    <div className='searchItem'>
        <img src='https://media.istockphoto.com/id/1094626640/photo/empty-bed-in-a-hospital-ward.jpg?s=612x612&w=0&k=20&c=xERQeYx7Vifi37DG50ykcVNA2sVb6Bqbk8IeRopXY6M=' alt='' className='siImg'></img>

        <div className='siDesc'>
          <h1 className='siTitle'>One Bed Fully Ac Room</h1>
          <span className='siDistance'>200m From Doctor Chamber</span>
          <span className='siTaxiOp'>Free Oxygen Providing</span>
          <span className='siSubtitle'>Best Nurse Provide</span>
          <span className='siFeatures'>Entire Room . 1 Bathroom . 21m^2 1 full Bed</span>
          <span className='siCancelOP'>Free Cancellations</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className='siDetailText'>
            <span className='siPrice'>3200/</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
          <Link to="/Hotel" className='siCheckButton'>See Availability</Link>
          </div>
        </div>
    </div>
  )
}

export default Searchitem;