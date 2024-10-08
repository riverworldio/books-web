import React from "react";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import "./Table.css";
import OutlinedBtn from "../Buttons/OutlinedBtn/OutlinedBtn";
import TextBtn from "../Buttons/TextBtn/TextBtn";
import { RxCross1 } from "react-icons/rx";

const EditableTableBills = ({
  tablehead,
  rows = [{ itemTable: "", quantity: "", rate: "", amount: "" }],
  addRow,
  updateRow,
  removeRow,
  btnName,
}) => {
  const handleAddRow = () => {
    const newRow = {
      id: Date.now().toString().slice(-4),
      itemTable: "",
      quantity: "",
      rate: "",
      amount: "",
    };
    addRow(newRow);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRow = {
      ...rows[index],
      [name]: value,
    };
    if (name === "rate" || name === "quantity") {
      const quantity =
        parseFloat(name === "quantity" ? value : rows[index]?.quantity) || 0;
      const rate = parseFloat(name === "rate" ? value : rows[index]?.rate) || 0;
      updatedRow.amount = (quantity * rate)?.toFixed(2);
    }
    updateRow(index, updatedRow);
  };

  const handleRemoveRow = (index) => {
    removeRow(index);
  };

  return (
    <table className="table table-bordered">
      <thead>
        <TableRow style={{ backgroundColor: "#f7f7f7" }}>
          {tablehead.map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <input
                type="text"
                name="itemTable"
                value={row.itemTable}
                className="input-borderless"
                onChange={(event) => handleInputChange(index, event)}
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                name="account"
                value={row.account}
                className="input-borderless"
                onChange={(event) => handleInputChange(index, event)}
              />
            </TableCell>
            <TableCell>
              <input
                type="number"
                name="quantity"
                value={row.quantity}
                className="input-borderless"
                onChange={(event) => handleInputChange(index, event)}
              />
            </TableCell>
            <TableCell>
              <input
                type="number"
                name="rate"
                value={row.rate}
                className="input-borderless"
                onChange={(event) => handleInputChange(index, event)}
              />
            </TableCell>
            <TableCell>
              <input
                type="number"
                name="amount"
                value={row.amount}
                className="input-borderless"
                readOnly
              />
            </TableCell>
            <TableCell>
              <TextBtn
                text={<RxCross1 />}
                fontSize="18px"
                margin="0px 0px"
                fontColor="red"
                onClick={() => handleRemoveRow(index)}
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={tablehead.length}>
            <OutlinedBtn
              text={btnName}
              fontSize="12px"
              margin="10px 0px"
              onClick={handleAddRow}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default EditableTableBills;
