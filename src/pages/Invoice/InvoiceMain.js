import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  MainLayout,
  TextTypo,
  FlexContainer,
  BorderStyled,
  ImageContainer,
  Container,
} from "../../components";

const InvoiceMain = () => {
  return (
    <MainLayout>
      <Container>
        <TextTypo text="Invoices" fontSize="30px" fontWeight="400" />
        <FlexContainer>
          <FlexContainer direction="column" width="50%">
            <TextTypo
              text="Invoices can be one time or recurring."
              fontSize="16px"
              fontWeight="300"
              margin="20px 0px 0px 0px"
            />
            <TextTypo
              text="You can send them to customers and start accepting online payments."
              fontSize="16px"
              fontWeight="300"
            />
            <TextTypo
              text="Check out the documentation for more details."
              fontSize="16px"
              fontWeight="300"
              margin="0px 0px 20px 0px"
            />
            <BorderStyled
              borderStyle="solid"
              borderWidth="90%"
              borderHeight="1px"
              borderColor="black"
              margin="0px 0px 10px 0px"
            />
            <NavLink to="/newInvoice">
              <FlexContainer width="86%">
                <FlexContainer direction="column">
                  <TextTypo
                    text="New Invoice"
                    fontSize="18px"
                    fontWeight="600"
                  />
                  <TextTypo
                    text="Create a new invoice easily"
                    fontSize="15px"
                    fontWeight="300"
                  />
                </FlexContainer>
                <MdOutlineKeyboardArrowRight size={30} />
              </FlexContainer>
            </NavLink>
            <BorderStyled
              borderStyle="solid"
              borderWidth="90%"
              borderHeight="1px"
              borderColor="black"
              margin="10px 0px"
            />
            <NavLink to="/viewInvoices">
              <FlexContainer width="86%">
                <FlexContainer direction="column">
                  <TextTypo
                    text="Import and Export"
                    fontSize="18px"
                    fontWeight="600"
                  />
                  <TextTypo
                    text="Import your existing expenses with a single click in various file formats"
                    fontSize="15px"
                    fontWeight="300"
                  />
                </FlexContainer>
                <MdOutlineKeyboardArrowRight size={30} />
              </FlexContainer>
            </NavLink>
            <BorderStyled
              borderStyle="solid"
              borderWidth="90%"
              borderHeight="1px"
              borderColor="black"
              margin="10px 0px 0px 0px"
            />
          </FlexContainer>
          <ImageContainer
            imgLink="https://media.istockphoto.com/id/1472440901/vector/bank-service-employees-and-clients-financial-consultation.jpg?s=612x612&w=0&k=20&c=32_PrwGl0oo7Vjq-WZSc85HhQmCSFUz1g96nmWgq6hw="
            imageWidth="460px"
          />
        </FlexContainer>
      </Container>
    </MainLayout>
  );
};

export default InvoiceMain;
