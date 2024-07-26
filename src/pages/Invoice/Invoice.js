import React from "react";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import TextTypo from "../../components/TextTypo/TextTypo";
import FlexContainer from "../../components/Flexbox/FlexContainer";
import TextBtn from "../../components/Buttons/TextBtn/TextBtn";
import FilledBtn from "../../components/Buttons/FilledBtn/FilledBtn";
import InvoiceTable from "../../components/InvoiceTable/InvoiceTable";
import SearchInput from "../../components/SearchInput/SearchInput";

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
      <SearchInput/>
      <InvoiceTable/>
    </MainLayout>
  );
};

export default Invoice;
