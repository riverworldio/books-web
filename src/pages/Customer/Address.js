import React, { useEffect, useState } from "react";
import { FlexContainer, CustomInput, TextTypo } from "../../components";

const countryStateMap = {
  India: [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Delhi", label: "Delhi" },
  ],
  USA: [
    { value: "California", label: "California" },
    { value: "New York", label: "New York" },
    { value: "Texas", label: "Texas" },
  ],
};

const Address = ({
  billingAddress,
  shippingAddress,
  onBillingAddressChange,
  onShippingAddressChange,
  shippingSameAsBilling,
  setShippingSameAsBilling,
}) => {
  const [billingStates, setBillingStates] = useState([]);
  const [shippingStates, setShippingStates] = useState([]);

  useEffect(() => {
    onBillingAddressChange(billingAddress);

    if (billingAddress.country) {
      setBillingStates(countryStateMap[billingAddress.country] || []);
    }
  }, [billingAddress, onBillingAddressChange]);

  useEffect(() => {
    if (shippingSameAsBilling) {
      onShippingAddressChange(billingAddress);
    } else {
      onShippingAddressChange(shippingAddress);

      if (shippingAddress.country) {
        setShippingStates(countryStateMap[shippingAddress.country] || []);
      }
    }
  }, [
    shippingSameAsBilling,
    billingAddress,
    shippingAddress,
    onShippingAddressChange,
  ]);

  const handleBillingChange = (field, value) => {
    onBillingAddressChange({ ...billingAddress, [field]: value });
    if (field === "country") {
      setBillingStates(countryStateMap[value] || []);
      onBillingAddressChange({ ...billingAddress, state: "", city: "" });
    }
  };

  const handleShippingChange = (field, value) => {
    onShippingAddressChange({ ...shippingAddress, [field]: value });
    if (field === "country") {
      setShippingStates(countryStateMap[value] || []);
      onShippingAddressChange({ ...shippingAddress, state: "", city: "" });
    }
  };

  return (
    <FlexContainer>
      <FlexContainer direction="column" width="100%" margin="0px 50px 0px 0px">
        <TextTypo text="Billing Address" fontSize="18px" fontWeight="600" />
        <CustomInput
          type="text"
          margin="0px"
          label="Attention"
          value={billingAddress.attention}
          onChange={(e) => handleBillingChange("attention", e.target.value)}
        />
        <CustomInput
          type="dropdown"
          label="Country / Region"
          value={billingAddress.country}
          defaultOption="Select country"
          onChange={(e) => handleBillingChange("country", e.target.value)}
          options={Object.keys(countryStateMap).map((country) => ({
            value: country,
            label: country,
          }))}
          margin="0px"
        />
        <CustomInput
          type="textarea"
          label="Address"
          value={billingAddress.address1}
          margin="0px"
          placeholder="Street 1"
          onChange={(e) => handleBillingChange("address1", e.target.value)}
        />
        <CustomInput
          type="textarea"
          value={billingAddress.address2}
          placeholder="Street 2"
          margin="0px"
          onChange={(e) => handleBillingChange("address2", e.target.value)}
        />
        <CustomInput
          type="dropdown"
          label="State"
          value={billingAddress.state}
          defaultOption="Select state"
          onChange={(e) => handleBillingChange("state", e.target.value)}
          options={billingStates}
          margin="0px"
        />
        <CustomInput
          type="text"
          label="District"
          value={billingAddress.district}
          defaultOption="Select district"
          onChange={(e) => handleBillingChange("district", e.target.value)}
          margin="0px"
        />
        <CustomInput
          type="text"
          label="City"
          value={billingAddress.city}
          defaultOption="Select city"
          onChange={(e) => handleBillingChange("city", e.target.value)}
          margin="0px"
        />
        <CustomInput
          type="number"
          margin="0px"
          label="Phone Number"
          value={billingAddress.phone}
          onChange={(e) => handleBillingChange("phone", e.target.value)}
        />
      </FlexContainer>

      <FlexContainer direction="column" width="100%">
        <TextTypo text="Shipping Address" fontSize="18px" fontWeight="600" />
        <CustomInput
          type="checkbox"
          checked={shippingSameAsBilling}
          label="Same as Billing Address"
          margin="0px"
          onChange={(e) => setShippingSameAsBilling(e.target.checked)}
        />
        {!shippingSameAsBilling && (
          <>
            <CustomInput
              type="text"
              margin="0px"
              label="Attention"
              value={shippingAddress.attention}
              onChange={(e) =>
                handleShippingChange("attention", e.target.value)
              }
            />
            <CustomInput
              type="dropdown"
              label="Country / Region"
              value={shippingAddress.country}
              defaultOption="Select country"
              onChange={(e) => handleShippingChange("country", e.target.value)}
              options={Object.keys(countryStateMap).map((country) => ({
                value: country,
                label: country,
              }))}
              margin="0px"
            />
            <CustomInput
              type="textarea"
              label="Address"
              value={shippingAddress.address1}
              margin="0px"
              placeholder="Street 1"
              onChange={(e) => handleShippingChange("address1", e.target.value)}
            />
            <CustomInput
              type="textarea"
              value={shippingAddress.address2}
              placeholder="Street 2"
              margin="0px"
              onChange={(e) => handleShippingChange("address2", e.target.value)}
            />
            <CustomInput
              type="dropdown"
              label="State"
              value={shippingAddress.state}
              defaultOption="Select state"
              onChange={(e) => handleShippingChange("state", e.target.value)}
              options={shippingStates}
              margin="0px"
            />
            <CustomInput
              type="text"
              label="District"
              value={shippingAddress.district}
              defaultOption="Select district"
              onChange={(e) => handleShippingChange("district", e.target.value)}
              margin="0px"
            />
            <CustomInput
              type="text"
              label="City"
              value={shippingAddress.city}
              defaultOption="Select city"
              onChange={(e) => handleShippingChange("city", e.target.value)}
              margin="0px"
            />
            <CustomInput
              type="number"
              margin="0px"
              label="Phone Number"
              value={shippingAddress.phone}
              onChange={(e) => handleShippingChange("phone", e.target.value)}
            />
          </>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Address;
