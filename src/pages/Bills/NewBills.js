import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEntity } from "../../actions/EntityActions";
import { useActions } from "../../app/use-Actions";
import EditableTableBills from "../../components/Table/EditableTableBills";
import { useSelector } from "react-redux";
import { selectEntity } from "../../selectors/EntitySelector";

const NewBills = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vendorName, setVendorName] = useState("");
  const [billDate, setbillDate] = useState("");
  const [billNumber, setbillNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [terms, setTerms] = useState("");
  const [subject, setSubject] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [total, setTotal] = useState("");
  const [notes, setNotes] = useState("");
  const [advanced, setAdvanced] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const [rows, setRows] = useState([
    { item: "", quantity: 1, rate: 0, amount: 0 },
  ]);
  const { bill } = useSelector(selectEntity);

  const actions = useActions({
    addEntity,
  });
  const headers1 = ["Item Table"];
  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const taxOptions = [
    { value: "1%", label: "1%" },
    { value: "5%", label: "5%" },
    { value: "18%", label: "18%" },
  ];

  useEffect(() => {
    bill?.data?.data
      ?.filter((item) => item.id === id)
      ?.forEach((billData) => {
        setVendorName(billData?.vendorName);
        setbillDate(billData?.billDate);
        setbillNumber(billData?.billNumber);
        setDueDate(billData?.dueDate);
        setOrderNumber(billData?.orderNumber);
        setTerms(billData?.terms);
        setSubject(billData?.subject);
        setDiscount(billData?.discount);
        setTax(billData?.tax);
        setTotal(billData?.total);
        setNotes(billData?.notes);
        setAdvanced(billData?.advanced);
        setRows(billData?.items);
      });
  }, [id]);

  const calculateTotal = () => {
    const subtotal = rows?.reduce(
      (acc, row) => acc + parseFloat(row?.amount || 0),
      0
    );
    const discountAmount = (subtotal * (parseFloat(discount) || 0)) / 100;
    const taxAmount =
      ((subtotal - discountAmount) * (parseFloat(tax) || 0)) / 100;
    const finalTotal = subtotal - discountAmount + taxAmount;

    setSubTotal(subtotal?.toFixed(2));
    return finalTotal?.toFixed(2);
  };

  const updateTotal = () => {
    const newTotal = calculateTotal();
    setTotal(newTotal);
  };

  useEffect(() => {
    updateTotal();
  }, [rows, discount, tax]);

  const addRow = (newRow) => {
    setRows([...rows, newRow]);
  };

  const updateRow = (index, updatedRow) => {
    const updatedRows = rows?.map((row, i) => (i === index ? updatedRow : row));
    setRows(updatedRows);
  };

  const removeRow = (index) => {
    const updatedRows = rows?.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleSave = async () => {
    const billData = {
      vendorName,
      billDate,
      billNumber,
      dueDate,
      orderNumber,
      terms,
      subject,
      discount,
      tax,
      total,
      notes,
      advanced,
      items: rows,
    };
    if (id) {
      billData.id = id;
    }
    try {
      if (id) {
        await actions.addEntity(billData, "bill");
        toast.success("Updated successfully!");
      } else {
        await actions.addEntity(billData, "bill");
        toast.success("Saved successfully!");
      }

      setTimeout(() => {
        navigate(-1);
      }, 1000);
    } catch (error) {
      toast.error("Failed to save bill!");
      console.error("Error saving bill:", error);
    }
  };

  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo
          text={id ? "Edit bill" : "New bill"}
          fontSize="30px"
          fontWeight="400"
        />
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
          label="Vendor Name"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          placeholder="Select or add a Vendor"
            width="50%"
          variant="standard"
          required={true}
        />
        <FlexContainer direction="column">
          <CustomInput
            type="date"
            label="Bill Date"
            value={billDate}
            onChange={(e) => setbillDate(e.target.value)}
            width="50%"
            margin="0px"
            required={true}
          />
          <CustomInput
            type="text"
            label="Bill Number"
            value={billNumber}
            onChange={(e) => setbillNumber(e.target.value)}
            width="50%"
            margin="0px"
            required={true}
          />
          <CustomInput
            type="date"
            label="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            width="50%"
            margin="0px"
          />
        </FlexContainer>
        <FlexContainer justify="">
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
        </FlexContainer>
        <CustomInput
          type="text"
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Let your Vendor know what this bill is for"
          variant="standard"
          required={true}
        />
        <Container margin="20px 0px">
          <Table headers={headers1} headerFontSize="16px" />
          <EditableTableBills
            tablehead={[
              "#",
              "ITEM",
              "ACCOUNT",
              "QUANTITY",
              "RATE",
              "AMOUNT",
              "",
            ]}
            rows={rows}
            updateRow={updateRow}
            removeRow={removeRow}
            addRow={addRow}
            btnName="+ Add item"
          />
        </Container>

        <Container
          margin="20px 0px"
          bgColor="#F7F7F7"
          padding="20px"
          border="0.5px solid #00000080"
        >
          <FlexContainer>
            <TextTypo text="Sub Total" />
            <TextTypo text={subTotal} />
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
                  placeholder="Add Discount (%)"
                />
                <CustomInput
                  type="dropdown"
                  value={tax}
                  margin="0px"
                  onChange={(e) => setTax(e.target.value)}
                  options={taxOptions}
                />
              </FlexContainer>
            </FlexContainer>
            <FlexContainer direction="column">
              <TextTypo
                text={`-${(
                  (subTotal * (parseFloat(discount) || 0)) /
                  100
                ).toFixed(2)}`}
                textAlign="right"
                fontColor="#00000080"
              />
              <TextTypo
                text={`+${(
                  ((subTotal - (subTotal * (parseFloat(discount) || 0)) / 100) *
                    (parseFloat(tax) || 0)) /
                  100
                ).toFixed(2)}`}
                textAlign="right"
                fontColor="#00000080"
              />
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
              {/* <CustomInput
                type="dropdown"
                value={total}
                margin="0px 0px 0px 20px"
                onChange={(e) => setTotal(e.target.value)}
                options={currencyOptions}
              /> */}
            </FlexContainer>
            <TextTypo text={total} />
          </FlexContainer>
        </Container>

        <CustomInput
          type="text"
          label="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Leave Vendor notes"
          variant="standard"
        />

        <CustomInput
          type="text"
          label="Advanced"
          value={advanced}
          onChange={(e) => setAdvanced(e.target.value)}
          placeholder="Here you can select category, add/edit footer or add attachments to your bill."
          variant="standard"
        />

        <FlexContainer justify="flex-end" margin="30px 0px">
          <TextBtn text="Cancel" onClick={() => navigate(-1)} />
          <OutlinedBtn text="Save as Draft" />
          <FilledBtn
            text={id ? "Update" : "Save"}
            bgColor="#0076BE"
            fontColor="white"
            onClick={handleSave}
          />
        </FlexContainer>
        <ToastContainer />
      </Container>
    </MainLayout>
  );
};

export default NewBills;
