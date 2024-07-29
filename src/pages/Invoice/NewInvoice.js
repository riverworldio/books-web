import React, { useState } from "react";
import {
  MainLayout,
  TextTypo,
  CustomInput,
  Container,
  FlexContainer,
  FilledBtn,
  TextBtn,
  Table,
  OutlinedBtn,
} from "../../components";

const NewInvoice = () => {
  const [textValue, setTextValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const headers1 = ["Item Table"];
  const headers = ["ITEM TABLE", "QUANTITY", "RATE", "AMOUNT"];
  const rows = [["Type or click to select an item +", "1", "0.00", "0.00"]];
  return (
    <MainLayout>
      <TextTypo text="New Invoice" fontSize="30px" fontWeight="400" />
      <Container margin="30px 0px">
        <CustomInput
          type="text"
          label="Customer Name"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Select or add a customer"
          variant="standard"
          required={true}
        />
        <FlexContainer>
          <CustomInput
            type="date"
            label="Invoice Date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            width="30%"
            required={true}
          />
          <CustomInput
            type="text"
            label="Invoice Number"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            width="30%"
            required={true}
          />
          <CustomInput
            type="date"
            label="Due Date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            width="30%"
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="text"
            label="Order Number"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            width="30%"
          />
          <CustomInput
            type="dropdown"
            label="Terms"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            width="30%"
          />
          <CustomInput
            type="dropdown"
            label="Salesperson"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            width="30%"
          />
        </FlexContainer>
        <CustomInput
          type="text"
          label="Subject"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Let your customer know what this invoice is for"
          variant="standard"
          required={true}
        />

        {/*Item table*/}
        <Container margin="20px 0px">
          <Table headers={headers1} headerFontSize="16px" />
          <Table
            headers={headers}
            rows={rows}
            headerFontSize="14px"
            cellFontSize="14px"
          />
          <OutlinedBtn text="Add Item +" fontSize="12px" margin="10px 0px" />
        </Container>

        {/* Sub total box */}
        {/* <Container
          margin="20px 0px"
          bgColor="#F7F7F7"
          padding="20px"
          border="0.5px solid #00000080"
        >
          <FlexContainer>
            <TextTypo text="Sub Total" />
            <TextTypo text="0.00" />
          </FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <TextTypo text="Discount" />
              <CustomInput
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder="Add Discount+"
              />
            </FlexContainer>
            <TextTypo text="0.00" />
          </FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <TextTypo text="Tax" />
              <CustomInput
                type="dropdown"
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
                options={dropdownOptions}
              />
            </FlexContainer>
            <TextTypo text="0.00" />
          </FlexContainer>
        </Container> */}

        {/* Notes */}
        <CustomInput
          type="text"
          label="Notes"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Leave customer notes"
          variant="standard"
        />

        {/* Advanced */}
        <CustomInput
          type="text"
          label="Advanced"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Here you can select category, add/edit footer or add attachments to your invoice."
          variant="standard"
        />

        {/* Buttons bottom */}
        <FlexContainer justify="flex-end" margin="30px 0px">
          <TextBtn text="Cancel" />
          <OutlinedBtn text="Save as Draft" />
          <FilledBtn text="Save" bgColor="#0076BE" fontColor="white" />
        </FlexContainer>
      </Container>
    </MainLayout>
  );
};

export default NewInvoice;
