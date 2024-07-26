import React from "react";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TextTypo from "../../components/TextTypo/TextTypo";
import FlexContainer from "../../components/Flexbox/FlexContainer";
import TextBtn from "../../components/Buttons/TextBtn/TextBtn";
import FilledBtn from "../../components/Buttons/FilledBtn/FilledBtn";

const Items = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Items" fontSize="25px" fontWeight="400" />
        <FlexContainer>
          <TextBtn
            text="Accept Payments Online"
            fontSize="13px"
            fontColor="#0076BE"
          />
          <FilledBtn
            text="Add new"
            fontSize="13px"
            fontColor="white"
            bgColor="#6EA152"
          />
          <FilledBtn text="Import" fontSize="13px" />
          <FilledBtn text="Export" fontSize="13px" />
        </FlexContainer>
      </FlexContainer>
    </MainLayout>
  );
};

export default Items;
