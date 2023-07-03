import React, { useState } from 'react';
import Navbar from '../../component/navbar/Navbar';
import Header from '../../component/header/Header';
import {useLocation} from "react-router-dom";
import './List.css';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import Searchitem from '../../component/Searchitem/Searchitem';


const List =() => {
  const location = useLocation();
  const [destination]= useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options)
  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className='listContainer'>
      <div className='listWrapper'>
        <div className='listSearch'>
          <h1 className='isTitle'>Search</h1>
          <div className='isItem'>
            <label>Destination</label>
            <input placeholder={destination} type="text"></input>
          </div>
          <div className='isItem'>
            <label>Chek-in-Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "mm/dd/yyyy"
            )} to ${format(date[0].endDate, "mm/dd/yyyy")} `}</span>

            {openDate &&( <DateRange onChange={(item) => setDate([item.selection])} 
            minDate={new Date()}
            ranges={date}
             />)}
          </div>
          <div className='lsItem'>
            <label>Options</label>
            <div className='lsOptions'>
            <div className='lsOptionsItem'>
              <span className='lsOptionsText'>Minimum Price <small>Per Day</small></span>
              <input type="number"  min={2500} className='lsOptionsInput' placeholder={2500}></input>
            </div>
            <div className='lsOptionsItem'>
              <span className='lsOptionsText'>Maximum Price <small>Per Day</small></span>
              <input type="number" min={5000} className='lsOptionsInput' placeholder={50000}></input>
            </div>
            <div className='lsOptionsItem'>
              <span className='lsOptionsText'>Adult</span>
              <input type="number" min={0} className='lsOptionsInput' placeholder={1}></input>
            </div>
            <div className='lsOptionsItem'>
              <span className='lsOptionsText'>Children</span>
              <input type="number" min={0} className='lsOptionsInput' placeholder={0}></input>
            </div>
            <div className='lsOptionsItem'>
              <span className='lsOptionsText'>Room</span>
              <input type="number" min={1} className='lsOptionsInput' placeholder={1}></input>
            </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className='listResult'>
        <Searchitem/>
        <Searchitem/>
        <Searchitem/>
        <Searchitem/>
        <Searchitem/>
        <Searchitem/>
        <Searchitem/>
        <Searchitem/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default List;