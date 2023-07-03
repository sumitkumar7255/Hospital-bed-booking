import React from 'react';
import Navbar from '../component/navbar/Navbar';
import "./Home.css";
import Header from '../component/header/Header';
import Featured from '../component/featured/Featured';
import PropertiesList from '../component/propertyList/PropertiesList';
import FeatureProperties from '../component/featureProperties/FeatureProperties';
import MailList from '../component/MailList/MailList';
import Footer from '../component/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        <Featured/>
        <h1 className='homeTitle'>Hospital Main Building</h1>
        <PropertiesList/>
        <h1 className='homeTitle'>Hospital which Patient Love</h1>
        <FeatureProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
    
  )
}

export default Home;