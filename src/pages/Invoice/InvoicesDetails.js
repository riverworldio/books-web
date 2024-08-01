import React from "react";
import { MainLayout,TextTypo } from "../../components";
import EditableTable from "../../components/Table/EditableTable";

const InvoicesDetails = () => {
  const headers = ["","ITEM TABLE", "QUANTITY", "RATE", "AMOUNT",""];
  return (
    <MainLayout>
      <TextTypo text="Invoice: INV - 00001" fontSize="25px" fontWeight="400" />
      <EditableTable tablehead={headers}/>
    </MainLayout>
  );
};

export default InvoicesDetails;
