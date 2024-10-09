import React from "react";
import {
  MainLayout,
  TextTypo,
  FlexContainer,
  TextBtn,
  FilledBtn,
  ItemsTable,
  Container,
  SearchInput,
} from "../../components";
import { NavLink } from "react-router-dom";

const Items = () => {
  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo text="Items" fontSize="25px" fontWeight="400" />
        <FlexContainer>
          <TextBtn
            text="Accept Payments Online"
            fontSize="13px"
            fontColor="#0076BE"
          />
          <NavLink to="/newItem">
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
      <Container margin="20px 0px">
      <SearchInput className="my-3" />
        <ItemsTable />
      </Container>
    </MainLayout>
  );
};

export default Items;
