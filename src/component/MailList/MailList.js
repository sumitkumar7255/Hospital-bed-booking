import React from 'react';
import './MailList.css';
import { GiTakeMyMoney } from "react-icons/gi";
import { BiDonateHeart } from "react-icons/bi";

function MailList() {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save Life  <span className='mailTitles'><BiDonateHeart/></span>, Save Money  <GiTakeMyMoney/></h1>
        <span className='mailDesc'>Sign Up And Well Send the Best Health To You</span>
        <div className='mailInputContainer'>
            <input type="text" className='sumText' placeholder='Your Email'></input>
            <button className='mailBtn'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList;