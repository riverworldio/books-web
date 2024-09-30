import React from "react";
import {
  MainLayout,
  TextTypo,
  FlexContainer,
  BorderStyled,
  TextIcon,
  FilledBtn,
  SearchInput,
} from "../../components";
import { FiBarChart2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Reports = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Reports" fontSize="25px" fontWeight="400" />
        <FilledBtn
          text="Add new"
          fontSize="13px"
          fontColor="white"
          bgColor="#6EA152"
        />
      </FlexContainer>
      <TextTypo
        text="General Reports"
        fontSize="20px"
        fontWeight="400"
        margin="30px 0px 20px 0px"
      />
      <SearchInput />
      <FlexContainer direction="column">
        <NavLink to="/ProfitAndLoss">
          <TextIcon fontSize="18px" fontColor="#009ED8">
            <FiBarChart2 /> Profit and Loss
          </TextIcon>
        </NavLink>
        <BorderStyled borderColor="#00000066" borderWidth="300px" />
        <TextIcon fontSize="18px" fontColor="#009ED8">
          <FiBarChart2 /> Sales by Customer
        </TextIcon>
        <BorderStyled borderColor="#00000066" borderWidth="300px" />
        <TextIcon fontSize="18px" fontColor="#009ED8">
          <FiBarChart2 /> Sales by Item
        </TextIcon>
        <BorderStyled borderColor="#00000066" borderWidth="300px" />
        <TextIcon fontSize="18px" fontColor="#009ED8">
          <FiBarChart2 /> Invoice Details
        </TextIcon>
        <BorderStyled borderColor="#00000066" borderWidth="300px" />
      </FlexContainer>
    </MainLayout>
  );
};

export default Reports;
