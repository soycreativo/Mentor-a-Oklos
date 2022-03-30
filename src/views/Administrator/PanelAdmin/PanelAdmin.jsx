import React from 'react';
import Footer from '../../../components/Footer/Footer.jsx';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import CounterCard from './CounterCard';
import Sidebar from './Sidebar.jsx';




const PanelAdmin = () => {
    return (
        <div>
          {/* <Navbar/> */}
          <CounterCard/>
          {/* <Sidebar/> */}
          <Footer/>
        </div>
    )
}

export default PanelAdmin;
