import React from "react";
import {
  MainLayout,
  TextTypo,
  FlexContainer,
  TextBtn,
  FilledBtn,
  SearchInput,
  CustomerTable,
} from "../../components";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Customer = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Customer" fontSize="25px" fontWeight="400" />
        <FlexContainer>
          <NavLink to="/newCustomer">
            <FilledBtn
              text="Add new"
              fontSize="13px"
              fontColor="white"
              bgColor="#6EA152"
            />
          </NavLink>
          <TextBtn text={<PiDotsThreeVerticalBold />} />
        </FlexContainer>
      </FlexContainer>
      <SearchInput className="my-3" />
      <CustomerTable />
    </MainLayout>
  );
};

export default Customer;
