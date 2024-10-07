import React, { useState, useEffect } from "react";
import {
  MainLayout,
  TextTypo,
  TextBtn,
  FlexContainer,
  Container,
  FilledBtn,
  Table,
  BorderStyled,
} from "../../components";
import { IoMdShare, IoMdClose } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEntity } from "../../selectors/EntitySelector";

const InvoicesDetails = () => {
  const navigate = useNavigate();
  const { invoice } = useSelector(selectEntity);
  const { id } = useParams();
  const [selectedInvoice, setInvoice] = useState(null);

  useEffect(() => {
    const selectedInvoice = invoice?.data?.data?.find((inv) => inv.id === id);
    setInvoice(selectedInvoice);
  }, [id, invoice]);

  if (!selectedInvoice) {
    return <p>Loading...</p>;
  }

  const rows1 = selectedInvoice.items.map((item, index) => [
    index + 1,
    item.itemTable || "N/A",
    item.quantity,
    item.rate,
    item.amount,
  ]);

  return (
    <MainLayout>
      <FlexContainer align="center">
        <TextTypo
          text={`Invoice: INV-${selectedInvoice.invoiceNumber}`}
          fontSize="25px"
          fontWeight="400"
        />
        <FlexContainer justify="" align="center">
          <FilledBtn text={<IoMdShare />} />
          <FilledBtn text={<FiPrinter />} />
          <TextBtn
            text={<IoMdClose />}
            fontColor="#FF2727"
            fontSize="26px"
            onClick={() => navigate(-1)}
          />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer margin="50px 0px">
        <Container width="40%" margin="0px 20px 0px 0px">
          <FlexContainer justify="">
            <TextTypo text="Created: " />
            <TextTypo text={selectedInvoice.invoiceDate} fontWeight="600" />
          </FlexContainer>
          <FlexContainer margin="30px 0px" justify="">
            <TextTypo text="Due Date: " />
            <TextTypo text={selectedInvoice.dueDate} fontWeight="600" />
          </FlexContainer>
          <FlexContainer margin="30px 0px" align="center">
            <TextTypo text="Get Paid :" />
            <FilledBtn
              text={selectedInvoice.status || "Paid"}
              fontColor="white"
              bgColor="#6EA152"
            />
          </FlexContainer>
          <FlexContainer margin="30px 0px" align="center">
            <TextTypo text="Amount due: " />
            <TextTypo text={`Rs. ${selectedInvoice.total}`} fontWeight="600" />
          </FlexContainer>
          <BorderStyled
            borderStyle="solid"
            borderWidth="100%"
            borderHeight="1px"
            borderColor="black"
            margin="10px 0px 0px 0px"
          />
        </Container>
        <Container border="1px solid #333" borderRadius="5px" padding="8px">
          <FlexContainer direction="column" align="center">
            <TextTypo text="TAX INVOICE" fontSize="25px" />
            <TextTypo text="RiverWorld Technologies" fontSize="19px" />
            <TextTypo text="Tamil Nadu - India" fontSize="15px" />
            <TextTypo text="gowthami@riverworld.io" fontSize="13px" />
          </FlexContainer>
          <BorderStyled
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="10px 0px"
          />
          <Container width="40%">
            <FlexContainer>
              <TextTypo text="#" />
              <TextTypo
                text={`INV-${selectedInvoice.invoiceNumber}`}
                fontWeight="600"
              />
            </FlexContainer>
            <FlexContainer margin="10px 0px">
              <TextTypo text="Invoice Date" />
              <TextTypo text={selectedInvoice.invoiceDate} fontWeight="600" />
            </FlexContainer>
            <FlexContainer margin="10px 0px">
              <TextTypo text="Terms" />
              <TextTypo text={selectedInvoice.terms} fontWeight="600" />
            </FlexContainer>
            <FlexContainer margin="10px 0px">
              <TextTypo text="Due Date" />
              <TextTypo text={selectedInvoice.dueDate} fontWeight="600" />
            </FlexContainer>
            <FlexContainer margin="10px 0px">
              <TextTypo text="P.O.#" />
              <TextTypo text={selectedInvoice.orderNumber} fontWeight="600" />
            </FlexContainer>
          </Container>
          <BorderStyled
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="10px 0px"
          />
          <Container margin="20px 0px">
            <Table
              headers={["Item Table"]}
              rows={[[selectedInvoice?.customerName]]}
              headerFontSize="16px"
            />

            <TextTypo text="Subject : " fontSize="15px" margin="10px 0px" />
            <TextTypo
              text="For Reference"
              fontSize="13px"
              fontWeight="600"
              margin="10px 0px"
            />
            <Table
              headers={["#", "Item & Description", "Qty", "Rate", "Amount"]}
              rows={rows1}
              headerFontSize="16px"
            />
          </Container>
          <Container border="1px solid #333" padding="7px">
            <FlexContainer align="start">
              <FlexContainer direction="column">
                <TextTypo text="Total in words" fontSize="13px" />
                <TextTypo
                  text="Indian Rupee Forty-Five Only"
                  fontSize="13px"
                  fontWeight="600"
                />
                <TextTypo text="Notes" fontSize="13px" />
                <TextTypo text="Thanks for your business" fontSize="13px" />
              </FlexContainer>
              <FlexContainer direction="column" align="center" width="40%">
                <Container>
                  <FlexContainer>
                    <TextTypo text="Sub Total" fontSize="13px" />
                    <TextTypo
                      text={`Rs. ${selectedInvoice.total}`}
                      fontWeight="600"
                      fontSize="13px"
                    />
                  </FlexContainer>
                  <FlexContainer margin="10px 0px">
                    <TextTypo text="Total" fontWeight="600" fontSize="13px" />
                    <TextTypo
                      text={selectedInvoice.total}
                      fontWeight="600"
                      fontSize="13px"
                    />
                  </FlexContainer>
                  <FlexContainer margin="10px 0px">
                    <TextTypo text="Payment Mode" fontSize="13px" />
                    <TextTypo
                      text={selectedInvoice.paymentMode}
                      fontWeight="600"
                      fontSize="13px"
                    />
                  </FlexContainer>
                  <FlexContainer margin="10px 0px">
                    <TextTypo
                      text="Balance Due"
                      fontWeight="600"
                      fontSize="13px"
                    />
                    <TextTypo
                      text={`Rs. ${selectedInvoice.balanceDue || "0.00"}`}
                      fontWeight="600"
                      fontSize="13px"
                    />
                  </FlexContainer>
                </Container>
                <Container border="1px solid #333" padding="5px" margin="0px">
                  <FlexContainer direction="column" align="center">
                    <TextTypo
                      text="Authorized Signature"
                      fontSize="13px"
                      margin="70px 0px 0px 0px"
                    />
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </FlexContainer>
          </Container>
        </Container>
      </FlexContainer>
    </MainLayout>
  );
};

export default InvoicesDetails;
