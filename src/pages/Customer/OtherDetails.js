import React from "react";
import {
  Container,
  FlexContainer,
  CustomInput,
} from "../../components";

const OtherDetails = ({ onChange, initialData }) => {
  const { pan, openingBalance, currency, paymentTerms, portalAccess, portalLanguage } = initialData;

  const currencyOptions = [
    { value: "inr", label: "INR - Indian Rupees" },
    { value: "usd", label: "USD - US Dollars" },
  ];

  const paymentTermsOptions = [
    { value: "due_on_receipt", label: "Due on Receipt" },
    { value: "net_30", label: "Net 30" },
    { value: "net_60", label: "Net 60" },
  ];

  const portalLanguageOptions = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
  ];

  return (
    <Container>
      <FlexContainer>
        <CustomInput
          type="text"
          label="PAN"
          value={pan}
          placeholder="Enter PAN number"
          onChange={(e) => onChange("pan", e.target.value)}
          width="50%"
          required={true}
        />
        <CustomInput
          type="text"
          label="Opening Balance"
          value={openingBalance}
          placeholder="Enter opening balance"
          onChange={(e) => onChange("openingBalance", e.target.value)}
          width="50%"
        />
      </FlexContainer>
      <FlexContainer>
        <CustomInput
          type="dropdown"
          label="Currency"
          value={currency}
          onChange={(e) => onChange("currency", e.target.value)}
          options={currencyOptions}
          width="50%"
        />
        <CustomInput
          type="dropdown"
          label="Payment Terms"
          value={paymentTerms}
          onChange={(e) => onChange("paymentTerms", e.target.value)}
          options={paymentTermsOptions}
          width="50%"
        />
      </FlexContainer>
      <FlexContainer justify="flex-start" align="center">
        <CustomInput
          type="checkbox"
          checked={portalAccess}
          label="Allow portal access for this customer"
          onChange={(e) => onChange("portalAccess", e.target.checked)}
        />
      </FlexContainer>
      <FlexContainer>
        <CustomInput
          type="dropdown"
          label="Portal Language"
          value={portalLanguage}
          onChange={(e) => onChange("portalLanguage", e.target.value)}
          options={portalLanguageOptions}
          width="50%"
        />
        <CustomInput
          type="file"
          label="File Upload"
          variant="dashedBox"
          onChange={(e) => onChange("file", e.target.files[0])}
          width="50%"
        />
      </FlexContainer>
    </Container>
  );
};

export default OtherDetails;
