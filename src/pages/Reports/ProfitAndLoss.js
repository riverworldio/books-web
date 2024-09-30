import React, { useState } from "react";
import {
  MainLayout,
  TextTypo,
  TextBtn,
  FlexContainer,
  Container,
  CustomInput,
  FilledBtn,
  BorderStyled,
} from "../../components";
import { IoMdShare, IoMdClose } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ProfitAndLoss = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Week");
  const dayOptions = [{ value: "today", label: "today" }];
  const handleTimeframeChange = (event) => {
    setSelectedTimeframe(event.target.value);
  };

  const data = {
    sections: [
      {
        title: "Operating Income",
        entries: [{ label: "Sales", value: "45.00", fontColor: "#0076BE" }],
        total: { label: "Total for Operating Income", value: "45.00" },
      },
      {
        title: "Cost of Goods Sold",
        total: { label: "Total Cost of Goods Sold", value: "0.00" },
      },
      {
        summary: { label: "Gross Profit", value: "45.00" },
      },
      {
        title: "Operating Expense",
        total: { label: "Total for Operating Expense", value: "0.00" },
      },
      {
        summary: { label: "Operating Profit", value: "45.00" },
      },
      {
        title: "Non Operating Income",
        total: { label: "Total for Non Operating Income", value: "0.00" },
      },
      {
        title: "Non Operating Expense",
        total: { label: "Total for Non Operating Expense", value: "0.00" },
      },
      {
        summary: { label: "Net Profit/Loss", value: "45.00" },
      },
    ],
  };

  return (
    <MainLayout>
      <FlexContainer align="center">
        <Container>
          <CustomInput
            type="dropdown"
            onChange={handleTimeframeChange}
            value={selectedTimeframe}
            options={dayOptions}
            margin="0"
            width="40%"
          />
        </Container>
        <FlexContainer justify="" align="center">
          <FilledBtn text={<IoMdShare />} />
          <FilledBtn text={<FiPrinter />} />
          <FilledBtn text="Export" />
          <NavLink to="/Reports">
            <TextBtn text={<IoMdClose />} fontColor="#FF2727" fontSize="26px" />
          </NavLink>
        </FlexContainer>
      </FlexContainer>
      <Container
        border="1px solid #cccccc"
        borderRadius="5px"
        margin="30px 0px"
        padding="30px"
      >
        <FlexContainer direction="column" align="center">
          <TextTypo text="RiverWorld Technologies" fontSize="19px" />
          <TextTypo text="Profit and Loss" fontSize="25px" />
          <TextTypo text="Basic: Accrual" fontSize="13px" />
          <TextTypo text="From 01/04/2024 To 30/04/2024" fontSize="13px" />
        </FlexContainer>
        <Container margin="40px 10px">
          <BorderStyled
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="10px 0px"
          />
          <FlexContainer>
            <TextTypo text="ACCOUNT" fontColor="#00000080" fontSize="15px" />
            <TextTypo text="TOTAL" fontColor="#00000080" fontSize="15px" />
          </FlexContainer>
          <BorderStyled
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="10px 0px"
          />

          {data.sections.map((section, index) => (
            <React.Fragment key={index}>
              {section.title && (
                <>
                  <TextTypo
                    text={section.title}
                    fontSize="15px"
                    margin="10px 0px"
                    fontWeight="600"
                  />
                  {section.entries &&
                    section.entries.map((entry, entryIndex) => (
                      <FlexContainer key={entryIndex}>
                        <TextTypo
                          text={entry.label}
                          fontSize="15px"
                          fontColor={entry.fontColor || "#000"}
                        />
                        <TextTypo
                          text={entry.value}
                          fontSize="15px"
                          fontColor={entry.fontColor || "#000"}
                        />
                      </FlexContainer>
                    ))}
                  <FlexContainer margin="10px 0px">
                    <TextTypo text={section.total.label} fontSize="15px" />
                    <TextTypo text={section.total.value} fontSize="15px" />
                  </FlexContainer>
                  <BorderStyled
                    borderStyle="solid"
                    borderColor="black"
                    borderHeight="1px"
                    margin="10px 0px"
                  />
                </>
              )}

              {section.summary && (
                <>
                  <FlexContainer margin="10px 0px" justify="end">
                    <TextTypo
                      text={`${section.summary.label} :`}
                      fontSize="15px"
                      fontWeight="600"
                    />
                    <TextTypo text={section.summary.value} fontSize="15px" />
                  </FlexContainer>
                  <BorderStyled
                    borderStyle="solid"
                    borderColor="black"
                    borderHeight="1px"
                    margin="10px 0px"
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </Container>
      </Container>
    </MainLayout>
  );
};

export default ProfitAndLoss;
