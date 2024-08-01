import React, { useState } from "react";
import {
  MainLayout,
  TextTypo,
  CustomInput,
  Container,
  FlexContainer,
  FilledBtn,
  TextBtn,
  NavTabs,
} from "../../components";
import { NavLink } from "react-router-dom";

const NewCustomer = () => {
  const [textValue, setTextValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [fileValue, setFileValue] = useState(null);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleFileChange = (e) => {
    console.log(fileValue)
    setFileValue(e.target.files[0]);
  };

  const OtherDetails = () => {
    return (
      <Container>
        <FlexContainer>
          <CustomInput
            type="text"
            label="PAN"
            value={textValue}
            placeholder="Enter PAN number"
            onChange={(e) => setTextValue(e.target.value)}
            width="50%"
            required={true}
          />
          <CustomInput
            type="text"
            label="Opening Balance"
            value={textValue}
            placeholder="Enter opening balance"
            onChange={(e) => setTextValue(e.target.value)}
            width="50%"
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="dropdown"
            label="Currency"
            value={dropdownValue}
            defaultOption="INR - Indian Rupees"
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            width="50%"
          />
          <CustomInput
            type="dropdown"
            label="Payment Terms"
            value={dropdownValue}
            defaultOption="Due on Receipt"
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            width="50%"
          />
        </FlexContainer>
        <FlexContainer justify="flex-start" align="center">
          <CustomInput
            type="checkbox"
            value={checkboxValue}
            label="Allow portal access for this customer"
            onChange={(e) => setCheckboxValue(e.target.checked)}
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="dropdown"
            label="Portal Language"
            value={dropdownValue}
            defaultOption="English"
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            width="50%"
          />
          <CustomInput
            type="file"
            label="File Upload"
            variant="dashedBox"
            onChange={handleFileChange}
            width="50%"
          />
        </FlexContainer>
      </Container>
    );
  };

  const Address = () => {
    return (
      <FlexContainer>
        <FlexContainer
          direction="column"
          width="100%"
          margin="0px 50px 0px 0px"
        >
          <TextTypo text="Billing Address" fontSize="18px" fontWeight="600" />
          <CustomInput
            type="text"
            margin="0px"
            label="Attention"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <CustomInput
            type="dropdown"
            label="Country / Region"
            value={dropdownValue}
            defaultOption=" "
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            margin="0px"
          />
          <CustomInput
            type="textarea"
            label="Address"
            value={textValue}
            margin="0px"
            placeholder="Street 1"
            onChange={(e) => setTextValue(e.target.value)}
          />
          <CustomInput
            type="textarea"
            value={textValue}
            placeholder="Street 2"
            margin="0px"
            onChange={(e) => setTextValue(e.target.value)}
          />
          <CustomInput
            type="dropdown"
            label="State"
            value={dropdownValue}
            defaultOption="Select state"
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            margin="0px"
          />
          <CustomInput
            type="dropdown"
            label="City"
            value={dropdownValue}
            defaultOption="Select city "
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            margin="0px"
          />
          <CustomInput
            type="text"
            margin="0px"
            label="Phone Number"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </FlexContainer>
        <FlexContainer direction="column" width="100%">
          <TextTypo text="Shipping Address" fontSize="18px" fontWeight="600" />
          <CustomInput
            type="checkbox"
            value={checkboxValue}
            label="Same as Billing Address"
            margin="0px"
            onChange={(e) => setCheckboxValue(e.target.checked)}
          />
          <CustomInput
            type="text"
            margin="0px"
            label="Attention"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <CustomInput
            type="dropdown"
            label="Country / Region"
            value={dropdownValue}
            defaultOption=" "
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            margin="0px"
          />
          <CustomInput
            type="textarea"
            label="Address"
            value={textValue}
            margin="0px"
            placeholder="Street 1"
            onChange={(e) => setTextValue(e.target.value)}
          />
          <CustomInput
            type="textarea"
            value={textValue}
            placeholder="Street 2"
            margin="0px"
            onChange={(e) => setTextValue(e.target.value)}
          />
          <CustomInput
            type="dropdown"
            label="State"
            value={dropdownValue}
            defaultOption="Select state"
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            margin="0px"
          />
          <CustomInput
            type="dropdown"
            label="City"
            value={dropdownValue}
            defaultOption="Select city "
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            margin="0px"
          />
          <CustomInput
            type="text"
            margin="0px"
            label="Phone Number"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </FlexContainer>
      </FlexContainer>
    );
  };

  const ContactPersons = () => {
    return (
      <Container>
        <Container
          width="60%"
          bgColor="#F8F8F8"
          padding="20px"
          margin="20px 0px"
        >
          <FlexContainer>
            <FlexContainer direction="column">
              <TextTypo text="Sweatha" fontWeight="600" fontSize="18px" />
              <TextTypo text="07 Jan 2024" fontWeight="400" fontSize="14px" />
            </FlexContainer>
            <FlexContainer direction="column">
              <TextTypo
                text="9084678678"
                fontWeight="600"
                fontSize="18px"
                textAlign="right"
              />
              <TextTypo
                text="neethu@gmail.com"
                fontWeight="400"
                fontSize="14px"
                textAlign="right"
              />
            </FlexContainer>
          </FlexContainer>
        </Container>
        <TextBtn
          text="+ Add Contact Person"
          fontColor="#0076BE"
          padding="0px"
          onClick={() => setIsOpenAdd(!isOpenAdd)}
        />
        {isOpenAdd && (
          <Container>
            <FlexContainer>
              <CustomInput
                type="text"
                label="Name"
                value={textValue}
                placeholder="Enter contact person name"
                onChange={(e) => setTextValue(e.target.value)}
                width="30%"
                required={true}
              />
              <CustomInput
                type="text"
                label="Number"
                value={textValue}
                placeholder="Enter customer display name"
                onChange={(e) => setTextValue(e.target.value)}
                width="30%"
                required={true}
              />
              <CustomInput
                type="text"
                label="Email"
                value={textValue}
                placeholder="Enter contact person mail"
                onChange={(e) => setTextValue(e.target.value)}
                width="30%"
                required={true}
              />
            </FlexContainer>
            <FilledBtn text="Add" />
          </Container>
        )}
      </Container>
    );
  };

  const tabs = [
    {
      key: "tab1",
      label: "Other Details",
      content: <OtherDetails />,
    },
    {
      key: "tab2",
      label: "Address",
      content: <Address />,
    },
    {
      key: "tab3",
      label: "Contact Persons",
      content: <ContactPersons />,
    },
  ];

  return (
    <MainLayout>
      <TextTypo text="New Customer" fontSize="30px" fontWeight="400" />
      <Container margin="30px 0px">
        <CustomInput
          label="Customer Type"
          type="dropdown"
          defaultOption="Select customer type"
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
          options={dropdownOptions}
          required={true}
        />
        <TextTypo text="Primary Contact" fontWeight="600" />
        <FlexContainer justify="">
          <CustomInput
            type="dropdown"
            value={dropdownValue}
            defaultOption="Saluation"
            onChange={(e) => setDropdownValue(e.target.value)}
            options={dropdownOptions}
            width="20%"
            required={true}
          />
          <CustomInput
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="First Name"
            width="28%"
            required={true}
          />
          <CustomInput
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="Last Name"
            width="28%"
            required={true}
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="text"
            label="Company Name"
            value={textValue}
            placeholder="Enter company name"
            onChange={(e) => setTextValue(e.target.value)}
            width="50%"
          />
          <CustomInput
            type="text"
            label="Customer display name"
            value={textValue}
            placeholder="Enter customer display name"
            onChange={(e) => setTextValue(e.target.value)}
            width="50%"
            required={true}
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="text"
            label="Customer Email"
            value={textValue}
            placeholder="Enter customer email"
            onChange={(e) => setTextValue(e.target.value)}
            width="50%"
            required={true}
          />
          <CustomInput
            type="text"
            label="Customer Phone"
            value={textValue}
            placeholder="Enter customer phone"
            onChange={(e) => setTextValue(e.target.value)}
            width="50%"
            required={true}
          />
        </FlexContainer>
        <Container margin="20px 0px">
          <NavTabs tabs={tabs} />
        </Container>
        {/* Buttons bottom */}
        <FlexContainer justify="flex-end" margin="30px 0px">
          <NavLink to="/Sales/Customers">
            <TextBtn text="Cancel" />
          </NavLink>
          <FilledBtn text="Save" bgColor="#0076BE" fontColor="white" />
        </FlexContainer>
      </Container>
    </MainLayout>
  );
};

export default NewCustomer;
