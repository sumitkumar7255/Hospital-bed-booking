import React from 'react';
import "./Header.css";
import { FaBed, FaAmbulance, FaNotesMedical, FaCalendar } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { TbCheckupList } from "react-icons/tb";
import { BsPersonLinesFill } from "react-icons/bs";
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";










  const Header = ({ type }) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    male: 1,
    female: 0,
    child: 1,
  });
  const navigate = useNavigate()
  const hendleOption = (sname, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [sname]: operation === "i" ? options[sname] + 1 : options[sname] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/hospital", { state: { destination, date, options } });
  };
  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className='headerList'>
          <div className='headerListItem'>
          <Link to="/Searchitem" className='textStyle'><FaBed/>&nbsp;&nbsp;<span>Patient Bed</span></Link> 
          </div>
          <div className='headerListItem'>
           <Link to="/Ambulance" className='textStyle'> <FaAmbulance />&nbsp;&nbsp;<span>Ambulance</span></Link>
          </div>
          <div className='headerListItem'>
            <GiMedicines /><span>Medicines</span>
          </div>
          <div className='headerListItem'>
            <TbCheckupList /><span>Checkup Slot</span>
          </div>
          <div className='headerListItem'>
            <FaNotesMedical /><span>Report Card</span>
          </div>
        </div>
        {type !== "list" &&
          <>
            <h1 className='headerTitle'>A LifeTime Of Disscount? Grab The Offer </h1>
            <p className='headerDesc'>Get Reward For Your Good Health - Unlock instant Saving Of 10% or ONE your Familiy Member Registration Free in Our SM Multispecialist Hospital.  ThankYou </p>
            <Link to="/login" className='headerBtn'>SignIn / Register</Link>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <span className='icon'><FaBed /></span>
                <input
                  type="text"
                  placeholder="Name Of Department"
                  className='headerSearchInput'
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className='headerSearchItem'>
                <span className='cal'><FaCalendar /></span>
                <span
                  onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "mm/dd/yyyy"
                  )} to ${format(date[0].endDate, "mm/dd/yyyy")} `}</span>
                {openDate && <DateRange
                  placeholder='Date to Date'
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />}
              </div>
              <div className='headerSearchItem'>
                <span className='icon'><BsPersonLinesFill /></span>
                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.male} male .${options.female} female .${options.child} child`}</span>
                {openOptions && <div className='options'>
                  <div className='optionItem'>
                    <span className='optionText'>Male</span>
                    <div className='optionCounter'>
                      <button
                        disabled={options.male <= 0} className='optionCounterButton' onClick={() => hendleOption("male", "d")}>-</button>
                      <span className='optionCounterNumbar'>{options.male}</span>
                      <button className='optionCounterButton' onClick={() => hendleOption("male", "i")}>+</button>
                    </div>
                  </div>
                  <div className='optionItem'>
                    <span className='optionText'>Female
                    </span>
                    <div className='optionCounter'>
                      <button disabled={options.female <= 0} className='optionCounterButton' onClick={() => hendleOption("female", "d")}>-</button>
                      <span className='optionCounterNumbar'>{options.female}</span>
                      <button className='optionCounterButton' onClick={() => hendleOption("female", "i")}>+</button>
                    </div>
                  </div>
                  <div className='optionItem'>
                    <span className='optionText'>Child
                    </span>
                    <div className='optionCounter'>
                      <button disabled={options.child <= 0} className='optionCounterButton' onClick={() => hendleOption("child", "d")}>-</button>
                      <span className='optionCounterNumbar'>{options.child}</span>
                      <button className='optionCounterButton' onClick={() => hendleOption("child", "i")}>+</button>
                    </div>
                  </div>
                </div>
                }
              </div>
              <div className='headerSearchItem'>
                <button className='headerBtn' onClick={handleSearch}>Search</button>
              </div>
            </div></>}
      </div>
    </div>
  )
}

export default Header;