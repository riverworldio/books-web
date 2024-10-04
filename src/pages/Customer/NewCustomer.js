import React, { useState, useEffect } from "react";
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
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import ContactPersons from "./ContactPersons";
import OtherDetails from "./OtherDetails";
import Address from "./Address";
import { ToastContainer, toast } from "react-toastify";
import { addEntity } from "../../actions/EntityActions";
import { useActions } from "../../app/use-Actions";
import { useSelector } from "react-redux";
import { selectEntity } from "../../selectors/EntitySelector";

const NewCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [customerType, setCustomerType] = useState("");
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [billingAddress, setBillingAddress] = useState({});
  const [shippingAddress, setShippingAddress] = useState({});
  const [contacts, setContacts] = useState([]);
  const [otherDetails, setOtherDetails] = useState({
    pan: "",
    openingBalance: "",
    currency: "",
    paymentTerms: "",
    portalAccess: false,
    portalLanguage: "",
    file: null,
  });
  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(false);

  const { customer } = useSelector(selectEntity);

  const customerTypeOptions = [
    { value: "individual", label: "Individual" },
    { value: "company", label: "Company" },
  ];

  const salutationOptions = [
    { value: "mr", label: "Mr." },
    { value: "ms", label: "Ms." },
    { value: "mrs", label: "Mrs." },
  ];

  const actions = useActions({
    addEntity,
  });

  useEffect(() => {
    if (id && customer?.data?.data?.length > 0) {
      const existingCustomer = customer.data.data.find(
        (item) => item.id === id
      );
      if (existingCustomer) {
        setCustomerType(existingCustomer.customerType);
        setSalutation(existingCustomer.primaryContact?.salutation || "");
        setFirstName(existingCustomer.primaryContact?.firstName || "");
        setLastName(existingCustomer.primaryContact?.lastName || "");
        setCompanyName(existingCustomer.primaryContact?.companyName || "");
        setDisplayName(existingCustomer.primaryContact?.displayName || "");
        setEmail(existingCustomer.primaryContact?.email || "");
        setPhone(existingCustomer.primaryContact?.phone || "");
        setBillingAddress(existingCustomer.billingAddress || {});
        setShippingAddress(existingCustomer.shippingAddress || {});
        setContacts(existingCustomer.contactPersons || []);
        setOtherDetails(existingCustomer.otherDetails || {});
        setShippingSameAsBilling(
          existingCustomer.shippingSameAsBilling || false
        );
      }
    }
  }, [id, customer]);

  const handleSave = async () => {
    const customerData = {
      customerType,
      primaryContact: {
        salutation,
        firstName,
        lastName,
        companyName,
        displayName,
        email,
        phone,
      },
      otherDetails: otherDetails,
      billingAddress: billingAddress,
      shippingAddress: shippingAddress ? shippingAddress : billingAddress,
      contactPersons: contacts,
    };

    if (id) {
      customerData.id = id;
    }

    try {
      await actions.addEntity(customerData, "customer");
      toast.success(id ? "Updated successfully!" : "Saved successfully!");
      setTimeout(() => navigate(-1), 1000);
    } catch (error) {
      toast.error("Failed to save invoice!");
      console.error("Error saving invoice:", error);
    }
  };

  const handleOtherDetailsChange = (field, value) => {
    setOtherDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleBillingAddressChange = (address) => {
    setBillingAddress(address);
  };

  const handleShippingAddressChange = (address) => {
    setShippingAddress(address);
  };

  const tabs = [
    {
      key: "tab1",
      label: "Other Details",
      content: (
        <OtherDetails
          initialData={otherDetails}
          onChange={handleOtherDetailsChange}
        />
      ),
    },
    {
      key: "tab2",
      label: "Address",
      content: (
        <Address
          billingAddress={billingAddress}
          shippingAddress={shippingAddress}
          onBillingAddressChange={handleBillingAddressChange}
          onShippingAddressChange={handleShippingAddressChange}
          shippingSameAsBilling={shippingSameAsBilling}
          setShippingSameAsBilling={setShippingSameAsBilling}
        />
      ),
    },
    {
      key: "tab3",
      label: "Contact Persons",
      content: <ContactPersons contacts={contacts} setContacts={setContacts} />,
    },
  ];

  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo
          text={id ? "Edit Customer" : "New Customer"}
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
          label="Customer Type"
          type="dropdown"
          defaultOption="Select customer type"
          value={customerType}
          onChange={(e) => setCustomerType(e.target.value)}
          options={customerTypeOptions}
          required={true}
        />
        <TextTypo text="Primary Contact" fontWeight="600" />
        <FlexContainer justify="">
          <CustomInput
            type="dropdown"
            value={salutation}
            defaultOption="Salutation"
            onChange={(e) => setSalutation(e.target.value)}
            options={salutationOptions}
            width="20%"
            required={true}
          />
          <CustomInput
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            width="28%"
            required={true}
          />
          <CustomInput
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            width="28%"
            required={true}
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="text"
            label="Company Name"
            value={companyName}
            placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)}
            width="50%"
          />
          <CustomInput
            type="text"
            label="Customer display name"
            value={displayName}
            placeholder="Enter customer display name"
            onChange={(e) => setDisplayName(e.target.value)}
            width="50%"
            required={true}
          />
        </FlexContainer>
        <FlexContainer>
          <CustomInput
            type="email"
            label="Customer Email"
            value={email}
            placeholder="Enter customer email"
            onChange={(e) => setEmail(e.target.value)}
            width="50%"
            required={true}
          />
          <CustomInput
            type="number"
            label="Customer Phone"
            value={phone}
            placeholder="Enter customer phone"
            onChange={(e) => setPhone(e.target.value)}
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
          <FilledBtn
            text={id ? "Update" : "Save"}
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

export default NewCustomer;
