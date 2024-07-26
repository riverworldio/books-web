import React from "react";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TextIcon from "../../components/TextTypo/TextIcon";
import TextTypo from "../../components/TextTypo/TextTypo";
import FlexContainer from "../../components/Flexbox/FlexContainer";
import FilledBtn from "../../components/Buttons/FilledBtn/FilledBtn";
import SearchInput from "../../components/SearchInput/SearchInput";
import BorderStyled from "../../components/Border/BorderStyled";
import { FiBarChart2 } from "react-icons/fi";

const Reports = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Reports" fontSize="25px" fontWeight="400" />
        <FlexContainer>
          <FilledBtn
            text="Add"
            fontSize="13px"
            fontColor="white"
            bgColor="#6EA152"
          />
          <SearchInput />
        </FlexContainer>
      </FlexContainer>
      <TextTypo
        text="General Reports"
        fontSize="20px"
        fontWeight="400"
        margin="30px 0px 20px 0px"
      />
      <FlexContainer direction="column">
        <TextIcon fontSize="18px" fontColor="#009ED8">
          <FiBarChart2 /> Profit and Loss
        </TextIcon>
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
