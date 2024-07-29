import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  MainLayout,
  TextTypo,
  FlexContainer,
  BorderStyled,
  Container,
  ProgressBars,
  TextBtn,
  ImageContainer,
} from "../../components";

const Dashboard = () => {
  return (
    <MainLayout>
      <TextTypo text="Dashboard" fontSize="30px" fontWeight="400" />
      <FlexContainer justify="flex-start" margin="50px 0px">
        <ImageContainer
          alt="profile-img"
          imgLink="https://m.media-amazon.com/images/I/31Cd9UQp6eL.jpg"
          imageWidth="50px"
        />
        <FlexContainer direction="column" justify="">
          <TextTypo text="Hello, Preeti" fontSize="20px" fontWeight="500" />
          <TextTypo
            text="Tawno Technologies, Coimbatore"
            fontSize="14px"
            fontWeight="400"
          />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer justify="space-between" margin="50px 0px">
        <Container>
          <FlexContainer
            justify="space-between"
            width="100%"
            align="center"
            margin="0px 50px 0px 0px"
          >
            <TextTypo
              text="Total Receivables"
              fontSize="18px"
              fontWeight="600"
            />
            <FlexContainer justify="flex-end">
              <TextBtn
                text="View Reports"
                fontSize="16px"
                fontColor="#0076BE"
                padding="0px"
              />
              <TextBtn text={<PiDotsThreeVerticalBold />} />
            </FlexContainer>
          </FlexContainer>
          <TextTypo
            text="Current and overdue amount that you’re yet to receive from your customers"
            fontSize="14px"
            fontWeight="400"
            margin="10px 20px 0px 0px"
          />
          <BorderStyled
            borderWidth="90%"
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="20px 0px"
          />
          <TextTypo
            text="Total Unpaid Invoices: Rs. 3478.00"
            fontSize="16px"
            fontWeight="600"
            margin="20px 0px"
          />
          <ProgressBars
            color="#0076BE"
            width="20%"
            containerWidth="90%"
            containerColor="#FFC76C"
          />
          <FlexContainer width="70%" margin="20px 0px">
            <FlexContainer direction="column" justify="">
              <TextTypo
                text="Current"
                fontSize="16px"
                fontWeight="500"
                fontColor="#0076BE"
              />
              <TextTypo text="Rs.540" fontSize="14px" fontWeight="600" />
            </FlexContainer>
            <FlexContainer direction="column" justify="">
              <TextTypo
                text="Current"
                fontSize="16px"
                fontWeight="500"
                fontColor="#FFC76C"
              />
              <TextTypo text="Rs.540" fontSize="14px" fontWeight="600" />
            </FlexContainer>
          </FlexContainer>
        </Container>
        <Container>
          <FlexContainer justify="space-between" width="100%" align="center">
            <TextTypo text="Total Payables" fontSize="18px" fontWeight="600" />
            <FlexContainer justify="flex-end">
              <TextBtn
                text="View Reports"
                fontSize="16px"
                fontColor="#0076BE"
              />
              <TextBtn text={<PiDotsThreeVerticalBold />} />
            </FlexContainer>
          </FlexContainer>
          <TextTypo
            text="Current and overdue amount that you’re yet to pay to your vendors"
            fontSize="14px"
            fontWeight="400"
            margin="10px 20px 0px 0px"
          />
          <BorderStyled
            borderWidth="90%"
            borderStyle="solid"
            borderColor="black"
            borderHeight="1px"
            margin="35px 0px 20px 0px"
          />
          <TextTypo
            text="Total Unpaid bills: Rs. 1550.00"
            fontSize="16px"
            fontWeight="600"
            margin="20px 0px"
          />
          <ProgressBars
            color="#0076BE"
            width="50%"
            containerWidth="90%"
            containerColor="#FFC76C"
          />
          <FlexContainer width="70%" margin="20px 0px">
            <FlexContainer direction="column" justify="">
              <TextTypo
                text="Current"
                fontSize="16px"
                fontWeight="500"
                fontColor="#0076BE"
              />
              <TextTypo text="Rs.540" fontSize="14px" fontWeight="600" />
            </FlexContainer>
            <FlexContainer direction="column" justify="">
              <TextTypo
                text="Current"
                fontSize="16px"
                fontWeight="500"
                fontColor="#FFC76C"
              />
              <TextTypo text="Rs.540" fontSize="14px" fontWeight="600" />
            </FlexContainer>
          </FlexContainer>
        </Container>
      </FlexContainer>
      <Container>
        <FlexContainer justify="space-between" width="100%" align="center">
          <TextTypo text="Cash Flows" fontSize="18px" fontWeight="600" />
          <FlexContainer justify="flex-end">
            <TextBtn text="View Reports" fontSize="16px" fontColor="#0076BE" />
            <TextBtn text={<PiDotsThreeVerticalBold />} />
          </FlexContainer>
        </FlexContainer>
        <TextTypo
          text="Cash coming in and going out of your business"
          fontSize="14px"
          fontWeight="300"
        />
        <BorderStyled
          borderWidth="100%"
          borderStyle="solid"
          borderColor="black"
          borderHeight="1px"
          margin="15px 0px"
        />
        <FlexContainer justify="space-between" width="100%">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 14, 16] }]}
            series={[
              {
                data: [0, 2, 4, 5.5, 2.5, 7, 8.5, 10, 15],
                area: true,
              },
            ]}
            height={400}
          />
          <FlexContainer direction="column" width="30%" justify="">
            <FlexContainer direction="column" justify="" margin="20px 0px">
              <TextTypo
                text="Cash as on Current date"
                fontSize="14px"
                fontWeight="400"
                textAlign="right"
              />
              <TextTypo
                text="Rs.1932.00"
                fontSize="18px"
                fontWeight="600"
                textAlign="right"
              />
            </FlexContainer>
            <FlexContainer direction="column" justify="" margin="20px 0px">
              <TextTypo
                text="Incoming +"
                fontSize="14px"
                fontWeight="400"
                fontColor="#6EA152"
                textAlign="right"
              />
              <TextTypo
                text="Rs.45.00"
                fontSize="18px"
                fontWeight="600"
                textAlign="right"
              />
            </FlexContainer>
            <FlexContainer direction="column" justify="" margin="20px 0px">
              <TextTypo
                text="Outgoing -"
                fontSize="14px"
                fontWeight="400"
                fontColor="#B84242"
                textAlign="right"
              />
              <TextTypo
                text="Rs.0.00"
                fontSize="18px"
                fontWeight="600"
                textAlign="right"
              />
            </FlexContainer>
            <FlexContainer direction="column" justify="" margin="20px 0px">
              <TextTypo
                text="Cash as on 5 Apr 2024 "
                fontSize="14px"
                fontWeight="400"
                textAlign="right"
                fontColor="#0076BE"
              />
              <TextTypo
                text="Rs.45.00"
                fontSize="18px"
                fontWeight="600"
                textAlign="right"
              />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
