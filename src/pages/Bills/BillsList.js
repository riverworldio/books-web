import React from "react";
import { NavLink } from "react-router-dom";
import {
  FlexContainer,
  FilledBtn,
  MainLayout,
  BillsTable,
  SearchInput,
  TextTypo,
} from "../../components";

const BillsList = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Bills" fontSize="25px" fontWeight="400" />
        <FlexContainer>
          <NavLink to="/newBill">
            <FilledBtn
              text="Add new"
              fontSize="13px"
              fontColor="white"
              bgColor="#6EA152"
            />
          </NavLink>
          <FilledBtn text="Import" fontSize="13px" />
          <FilledBtn text="Export" fontSize="13px" />
        </FlexContainer>
      </FlexContainer>
      <SearchInput />
      <BillsTable />
    </MainLayout>
  );
};

export default BillsList;
