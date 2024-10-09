import React, { useState, useEffect } from "react";
import {
  MainLayout,
  TextTypo,
  CustomInput,
  Container,
  FlexContainer,
  FilledBtn,
  TextBtn,
  OutlinedBtn,
} from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEntity } from "../../actions/EntityActions";
import { useActions } from "../../app/use-Actions";
import { useSelector } from "react-redux";
import { selectEntity } from "../../selectors/EntitySelector";

const NewItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemUnit, setItemUnit] = useState("");

  const [salesInformation, setSalesInformation] = useState({
    sellingPrice: "",
    account: "",
    description: "",
  });

  const [purchaseInformation, setPurchaseInformation] = useState({
    costPrice: "",
    account: "",
    description: "",
    preferredVendor: "",
  });

  const { items } = useSelector(selectEntity);
  const actions = useActions({ addEntity });

  const dropdownOptions = [{ value: "value1", label: "Value 1" }];
  const itemTypeOptions = [
    { value: "goods", label: "Goods" },
    { value: "services", label: "Services" },
  ];
  const unitOptions = [
    { value: "box", label: "BOX - box" },
    { value: "cm", label: "CMS - cm" },
    { value: "dz", label: "DOZ - dz" },
    { value: "ft", label: "FTS - ft" },
    { value: "g", label: "GMS - g" },
    { value: "in", label: "INC - in" },
    { value: "kg", label: "KGS - kg" },
  ];

  useEffect(() => {
    if (id && items?.data?.data) {
      const itemData = items.data.data.find((item) => item.id === id);
      if (itemData) {
        setItemName(itemData.itemName);
        setItemType(itemData.itemType);
        setItemUnit(itemData.itemUnit);
        setSalesInformation(itemData.salesInformation || {});
        setPurchaseInformation(itemData.purchaseInformation || {});
      }
    }
  }, [id, items]);

  const handleSalesChange = (field, value) => {
    setSalesInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePurchaseChange = (field, value) => {
    setPurchaseInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const itemData = {
      itemName,
      itemType,
      itemUnit,
      salesInformation,
      purchaseInformation,
    };

    if (id) {
      itemData.id = id;
    }

    try {
      await actions.addEntity(itemData, "items");
      toast.success(id ? "Updated successfully!" : "Saved successfully!");
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    } catch (error) {
      toast.error("Failed to save item!");
      console.error("Error saving item:", error);
    }
  };

  return (
    <MainLayout>
      <FlexContainer>
        <TextTypo
          text={id ? "Edit Item" : "New Item"}
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

      <CustomInput
        type="text"
        label="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Select or add a Item"
        width="100%"
        required
      />
      <Container margin="20px 0px">
        <FlexContainer align="center" margin="10px 0px 20px 0px">
          <CustomInput
            type="dropdown"
            label="Type"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            options={itemTypeOptions}
            width="45%"
            margin="0px"
          />

          <CustomInput
            type="dropdown"
            label="Unit"
            value={itemUnit}
            onChange={(e) => setItemUnit(e.target.value)}
            options={unitOptions}
            width="45%"
            margin="0px"
          />
        </FlexContainer>

        <FlexContainer align="start">
          <FlexContainer
            direction="column"
            width="100%"
            margin="0px 50px 0px 0px"
          >
            <TextTypo
              text="Sales Information"
              fontSize="20px"
              fontWeight="600"
              margin="10px 0px"
            />
            <CustomInput
              type="text"
              label="Selling Price"
              value={salesInformation.sellingPrice}
              onChange={(e) =>
                handleSalesChange("sellingPrice", e.target.value)
              }
              margin="0px"
              required
            />
            <CustomInput
              type="text"
              label="Account"
              value={salesInformation.account}
              onChange={(e) => handleSalesChange("account", e.target.value)}
              margin="0px"
              required
            />
            <CustomInput
              type="textarea"
              label="Description"
              value={salesInformation.description}
              onChange={(e) => handleSalesChange("description", e.target.value)}
              margin="0px"
            />
          </FlexContainer>

          <FlexContainer direction="column" width="100%">
            <TextTypo
              text="Purchase Information"
              fontSize="20px"
              fontWeight="600"
              margin="10px 0px"
            />
            <CustomInput
              type="text"
              label="Cost Price"
              value={purchaseInformation.costPrice}
              onChange={(e) =>
                handlePurchaseChange("costPrice", e.target.value)
              }
              margin="0px"
              required
            />
            <CustomInput
              type="text"
              label="Account"
              value={purchaseInformation.account}
              defaultOption="Select Purchase Account"
              onChange={(e) => handlePurchaseChange("account", e.target.value)}
              margin="0px"
              required
            />
            <CustomInput
              type="textarea"
              label="Description"
              value={purchaseInformation.description}
              onChange={(e) =>
                handlePurchaseChange("description", e.target.value)
              }
              margin="0px"
            />
            <CustomInput
              type="dropdown"
              label="Prefered Vendor"
              value={purchaseInformation.preferredVendor}
              onChange={(e) =>
                handlePurchaseChange("preferredVendor", e.target.value)
              }
              options={dropdownOptions}
              margin="0px"
            />
          </FlexContainer>
        </FlexContainer>

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

export default NewItem;
