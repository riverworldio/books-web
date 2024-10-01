import React, { useState } from "react";
import {
  BorderStyled,
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
import { NavLink, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useActions } from "../../app/use-Actions";
import { addEntity } from "../../actions/EntityActions";

const NewInvoice = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [terms, setTerms] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [subject, setSubject] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [total, setTotal] = useState("");
  const [notes, setNotes] = useState("");
  const [advanced, setAdvanced] = useState("");

  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const headers1 = ["Item Table"];
  const headers = ["ITEM TABLE", "QUANTITY", "RATE", "AMOUNT"];
  const rows = [["Type or click to select an item +", "1", "0.00", "0.00"]];

  const actions = useActions({
    addEntity,
  });

  const handleSave = async () => {
    const invoiceData = {
      customerName,
      invoiceDate,
      invoiceNumber,
      dueDate,
      orderNumber,
      terms,
      salesperson,
      subject,
      discount,
      tax,
      total,
      notes,
      advanced,
    };

    try {
      await actions.addEntity(invoiceData, "invoice");
      setCustomerName("");
      setInvoiceDate("");
      setInvoiceNumber("");
      setDueDate("");
      setOrderNumber("");
      setTerms("");
      setSalesperson("");
      setSubject("");
      setDiscount("");
      setTax("");
      setTotal("");
      setNotes("");
      setAdvanced("");
      toast.success("Saved successfully!");
      setTimeout(() => {
        navigate("/viewInvoices");
      }, 1000);
    } catch (error) {
      toast.error("Failed to save invoice!");
      console.error("Error saving invoice:", error);
    }
  };

  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="New Invoice" fontSize="30px" fontWeight="400" />
        <RxCross1
          color="red"
          size={30}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
      </FlexContainer>
      <Container margin="30px 0px">
        <CustomInput
          type="text"
          label="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Select or add a customer"
          variant="standard"
          required={true}
        />
        <FlexContainer>
          <CustomInput
            type="date"
            label="Invoice Date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            width="30%"
            required={true}
          />
          <CustomInput
            type="text"
            label="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            width="30%"
            required={true}
          />
          <CustomInput
            type="date"
            label="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            width="30%"
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="text"
            label="Order Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            width="30%"
          />
          <CustomInput
            type="dropdown"
            label="Terms"
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            options={dropdownOptions}
            width="30%"
          />
          <CustomInput
            type="dropdown"
            label="Salesperson"
            value={salesperson}
            onChange={(e) => setSalesperson(e.target.value)}
            options={dropdownOptions}
            width="30%"
          />
        </FlexContainer>
        <CustomInput
          type="text"
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Let your customer know what this invoice is for"
          variant="standard"
          required={true}
        />

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

        <Container
          margin="20px 0px"
          bgColor="#F7F7F7"
          padding="20px"
          border="0.5px solid #00000080"
        >
          <FlexContainer>
            <TextTypo text="Sub Total" />
            <TextTypo text="0.00" />
          </FlexContainer>
          <BorderStyled
            borderWidth="100%"
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="35px 0px 20px 0px"
          />
          <FlexContainer align="center">
            <FlexContainer align="center" width="30%">
              <FlexContainer direction="column">
                <TextTypo text="Discount" margin="0px 0px 15px 0px" />
                <TextTypo text="Tax" />
              </FlexContainer>
              <FlexContainer direction="column">
                <CustomInput
                  type="text"
                  value={discount}
                  margin="0px"
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Add Discount+"
                />
                <CustomInput
                  type="dropdown"
                  value={tax}
                  margin="0px"
                  onChange={(e) => setTax(e.target.value)}
                  options={dropdownOptions}
                />
              </FlexContainer>
            </FlexContainer>
            <FlexContainer direction="column">
              <TextTypo text="0.00" textAlign="right" fontColor="#00000080" />
              <TextTypo text="-0.00" textAlign="right" fontColor="#00000080" />
            </FlexContainer>
          </FlexContainer>
          <BorderStyled
            borderWidth="100%"
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="35px 0px 20px 0px"
          />
          <FlexContainer align="center">
            <FlexContainer width="30%" align="center">
              <TextTypo text="Total" />
              <CustomInput
                type="dropdown"
                value={total}
                margin="0px 0px 0px 20px"
                onChange={(e) => setTotal(e.target.value)}
                options={dropdownOptions}
              />
            </FlexContainer>
            <TextTypo text="0.00" />
          </FlexContainer>
        </Container>

        <CustomInput
          type="text"
          label="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Leave customer notes"
          variant="standard"
        />

        <CustomInput
          type="text"
          label="Advanced"
          value={advanced}
          onChange={(e) => setAdvanced(e.target.value)}
          placeholder="Here you can select category, add/edit footer or add attachments to your invoice."
          variant="standard"
        />

        <FlexContainer justify="flex-end" margin="30px 0px">
          <NavLink to="/Sales/Invoices">
            <TextBtn text="Cancel" />
          </NavLink>
          <OutlinedBtn text="Save as Draft" />
          <FilledBtn
            text="Save"
            bgColor="#0076BE"
            fontColor="white"
            onClick={handleSave}
          />
        </FlexContainer>
      </Container>
      <ToastContainer />
    </MainLayout>
  );
};

export default NewInvoice;
