import React from 'react';
import './Hospital.css';
import Navbar from '../../component/navbar/Navbar';
import Header from '../../component/header/Header';
import MailList from '../../component/MailList/MailList';
import Footer from '../../component/footer/Footer.js';
import { ImLocation } from "react-icons/im";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Hotel = () => {
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos=[
    {
      src: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2021/08/hospital_bed_for_home_getty_creative.jpeg.jpg"
    },
    {
      src: "https://i.ytimg.com/vi/OLt_nBDcoJ8/maxresdefault.jpg"
    },
    {
      src: "https://media.istockphoto.com/id/1222276055/photo/hospital-room.jpg?s=612x612&w=0&k=20&c=ZMn5J-Rn8qEG9qc3-OJVX_YXK2Gv8_PSR5nhCkm8-yg="
    },
    {
      src: "https://thumbs.dreamstime.com/b/empty-hospital-bed-newborn-baby-near-bed-empty-hospital-bed-patient-newborn-baby-near-bed-105528476.jpghttps://thumbs.dreamstime.com/b/empty-hospital-bed-newborn-baby-near-bed-empty-hospital-bed-patient-newborn-baby-near-bed-105528476.jpg"
    },
    {
      src: "https://media.licdn.com/dms/image/C5612AQG62OVU7AfslA/article-cover_image-shrink_600_2000/0/1520216541031?e=2147483647&v=beta&t=Hev83poXxro9cN_elI8baD0xjRKLEDC1DSWAhsaEtlc"
    },
    {
      src: "https://i.pinimg.com/originals/16/02/51/16025111dff57e9916ccbf55b4705197.jpg"
    },
    {
      src: "https://media.istockphoto.com/id/1130082169/photo/interior-of-brightly-lit-empty-hospital-ward.jpg?s=612x612&w=0&k=20&c=vNyr5rO43C0MZ8QNIareURSfiSsBVPAu9CDA9L5OQyU="
    },
    {
      src: "https://www.shutterstock.com/image-photo/empty-hospital-bed-patienthospital-specially-260nw-2170346231.jpg"
    },
    {
      src: "https://www.architectureanddesign.com.au/getattachment/d92a2627-a081-4938-a58b-79dae1c7416b/attachment.aspx?width=0&height=0"
    },
     
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber=slideNumber=== 0 ? 8 : slideNumber-1;
    }
    else{
      newSlideNumber=slideNumber===8 ? 0 : slideNumber+1;
    }
    setSlideNumber(newSlideNumber)
  };
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='hospialContainer'>
      {open && <div className='slider'>
      <span className='close' onClick={()=>setOpen(false)}><AiFillCloseCircle/></span>
      <span className='arrow' onClick={()=>handleMove("l")}><BsFillArrowLeftCircleFill/></span>
       <div className='slideWrapper'>
        <img src={photos[slideNumber].src} alt='' className='slideimg'></img>
       </div>
      <span className='arrow' onClick={()=>handleMove("r")}><BsFillArrowRightCircleFill/></span> 
      
      </div>}
      <div className='hospitalWrapper'>
      


      <Link to="./Payment"  className='bookNow'><button>Reserve Or Book Now!</button></Link>
        <h1 className='hospitalTitle'>Grand Hospital</h1>
        <div className='hospitalAddress'>
         <ImLocation/> 
         <span>Room NO. 3B </span>
        </div>
        <span className='hospitalDistance'>
          Excellent location 200m from Counter
        </span>
        <span className='hospitalPriceHigh'>
         Book A stay Over 2500/ at this Room and Get a Free Oxygen and Nurse 
        </span>
        <div className='hospitalImage'>
          {photos.map((photo,i)=>(
            <div className='hospitalImgWrapper'>
              <img onClick={()=>handleOpen(i)} src={photo.src} alt='' className='hospitallImg'></img>
            </div>
          ))}
        </div>
        <div className='hospitalDetails'>
          <div className='hospitalDetailsText'></div>
          <h1 className='hospitalTitle'> Stay Always in The Room</h1>
          <div className='hospitalDesc'>
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          A simple hospital bed, is specifically designed for non-critical hospitalized patients or others who require medical attention. These plain hospital beds have special features for the patient's comfort and well-being, as well as the convenience of health care workers.
          </div>

          <div className='hospitalDetailsPrice'>
            <h1>Perfect for a Patient Stay</h1>
            <span>Located in the left side of the Doctor Chamber
            and this Excellent score of 9.8 </span>
            
            <h2>
              <b>2500/</b> ( 1 Day )
            </h2>
            <Link to="./Payment" className='ssss'><button>Book Now!</button></Link>
          </div>
          
        </div>
        <Link to="./Payment" className='ssss'><button className='sumit'>Reserve Or Book Now!</button> </Link> 
      </div> 
      <MailList/>
      <Footer/>
      </div>
    </div>
  );
};

export default Hotel;