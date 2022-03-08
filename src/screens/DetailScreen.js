import React from 'react';
import Detail from '../components/detail/Detail';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useLocation } from 'react-router-dom';

const DetailScreen = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Detail data={location.state} />
      <Footer />
    </>
  );
}

export default DetailScreen