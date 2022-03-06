import React from 'react';
import Navbar from '../components/navbar/Navbar';
// import Bag from '../components/bag/Bag';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        {/* <Bag /> */}
        <Main />
        <Footer />
    </div>
  )
}

export default HomeScreen