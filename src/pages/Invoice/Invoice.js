import React from "react";
import { NavLink } from "react-router-dom";
import {
  FlexContainer,
  FilledBtn,
  MainLayout,
  InvoiceTable,
  SearchInput,
  TextTypo,
  TextBtn,
} from "../../components";

const Invoice = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Invoices" fontSize="25px" fontWeight="400" />
        <FlexContainer>
          <TextBtn
            text="Accept Payments Online"
            fontSize="13px"
            fontColor="#0076BE"
          />
          <NavLink to="/newInvoice">
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
      <FlexContainer justify="space-around" margin="50px 0px">
        <FlexContainer direction="column">
          <TextTypo text="Rs.150" fontSize="27px" fontWeight="600" />
          <TextTypo text="OverDue" fontSize="13px" textAlign="center" />
        </FlexContainer>
        <FlexContainer direction="column">
          <TextTypo text="Rs.4450" fontSize="27px" fontWeight="600" />
          <TextTypo text="Open" fontSize="13px" textAlign="center" />
        </FlexContainer>
        <FlexContainer direction="column">
          <TextTypo text="Rs.20" fontSize="27px" fontWeight="600" />
          <TextTypo text="In Draft" fontSize="13px" textAlign="center" />
        </FlexContainer>
      </FlexContainer>
      <SearchInput />
      <InvoiceTable />
    </MainLayout>
  );
};

export default Invoice;
