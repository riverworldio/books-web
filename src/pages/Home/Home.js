import React from "react";
import "./Home.css";
import { MainLayout, TextTypo } from "../../components";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <TextTypo text="Home" fontSize="30px" fontWeight="400" />
      </div>
    </MainLayout>
  );
};

export default Home;
