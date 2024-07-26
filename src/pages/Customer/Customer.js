import React from "react";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TextTypo from "../../components/TextTypo/TextTypo";
import FlexContainer from "../../components/Flexbox/FlexContainer";
import TextBtn from "../../components/Buttons/TextBtn/TextBtn";
import FilledBtn from "../../components/Buttons/FilledBtn/FilledBtn";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
import SearchInput from "../../components/SearchInput/SearchInput";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const Customer = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Customer" fontSize="25px" fontWeight="400" />
        <FlexContainer>
          <FilledBtn
            text="Add new"
            fontSize="13px"
            fontColor="white"
            bgColor="#6EA152"
          />
          <TextBtn text={<PiDotsThreeVerticalBold />} />
        </FlexContainer>
      </FlexContainer>
      <SearchInput className="my-3" />
      <CustomerTable />
    </MainLayout>
  );
};

export default Customer;
