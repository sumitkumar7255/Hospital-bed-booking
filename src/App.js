import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import React from "react";
import List from "./pages/list/List";
import Hospital from "./pages/hospital/Hospital";
import LoginSignupPage from "./component/Mylogin/Login";
import Hotel from "./pages/hospital/Hospital";
import Searchitem from "./component/Searchitem/Searchitem";
import Ambulance from "./pages/ambulance/Ambulance";
import Payment from "./pages/Payment/Payment";


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hospital" element={<List/>}/>
    <Route path="/hospital/:id" element={<Hospital/>}/>
    <Route path="/login" element={<LoginSignupPage/>}/>
    <Route path="/Hotel" element={<Hotel/>}/>
    <Route path="/Searchitem" element={<Searchitem/>}/>
    <Route path="/Ambulance" element={<Ambulance/>}/>
    <Route path="/Payment" element={<Payment/>}/>

    </Routes>
    </Router>
    </div>
  );
}

export default App;
