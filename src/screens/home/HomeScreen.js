import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./homeScreen.css";
import { data } from "../../constant/data";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="app_home">
        <Sidebar />
        <Main data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
