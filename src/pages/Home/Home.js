import React from "react";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import "./Home.css";
import TextTypo from "../../components/TextTypo/TextTypo";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <TextTypo text="Dashboard" fontSize="30px" fontWeight="400" />
      </div>
    </MainLayout>
  );
};

export default Home;
