import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FilledBtn from "../Buttons/FilledBtn/FilledBtn";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPenLine } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function createData(
  id,
  dueDate,
  issueDate,
  orderNum,
  status,
  customerName,
  customerNum,
  Amount
) {
  return {
    id,
    dueDate,
    issueDate,
    orderNum,
    status,
    customerName,
    customerNum,
    Amount,
  };
}

const rows = [
  createData(
    1,
    "Due 2 months ago",
    "13 Feb 2024",
    348695,
    "Paid",
    "Sanjay",
    "INV-586558",
    "Rs.6570"
  ),
  createData(
    2,
    "Due in 15 days",
    "13 Jul 2024",
    348345,
    "Sent",
    "Karthik",
    "INV-586558",
    "Rs.3570"
  ),
  createData(
    3,
    "Due tommorow",
    "14 Jan 2024",
    323419,
    "Draft",
    "Sanjay",
    "INV-586558",
    "Rs.2570"
  ),
  createData(
    4,
    "Due tommorow",
    "14 Jan 2024",
    376739,
    "Partial",
    "Karthik",
    "INV-584558",
    "Rs.1570"
  ),
  createData(
    5,
    "Due tommorow",
    "14 Jan 2024",
    356778,
    "Overdue",
    "Sanjay",
    "INV-586558",
    "Rs.470"
  ),
];

const styleCell = {
  fontSize: "16px",
  fontWeight: "600",
  padding: "10px",
};

const styleRow = {
  fontSize: "14px",
  fontWeight: "400",
  padding: "15px",
};

const statusStyles = {
  Paid: {
    fontColor: "#6EA152",
    bgColor: "#6EA15240",
  },
  Sent: {
    fontColor: "#DD8E0A",
    bgColor: "#FEF5E7",
  },
  Draft: {
    fontColor: "#707070",
    bgColor: "#ECECEC",
  },
  Partial: {
    fontColor: "#006395",
    bgColor: "#E6F1F6",
  },
  Overdue: {
    fontColor: "#C01C1C",
    bgColor: "#FAE6E6",
  },
  default: {
    fontColor: "#6EA152",
    bgColor: "#6EA15240",
  },
};

const getStatusColor = (status) => {
  const { fontColor, bgColor } = statusStyles[status] || statusStyles.default;
  return (
    <FilledBtn
      text={status}
      padding="3px 13px"
      fontSize="14px"
      fontColor={fontColor}
      bgColor={bgColor}
    />
  );
};

export default function InvoiceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={styleCell}>Due Date</TableCell>
            <TableCell sx={styleCell}>Issue Date</TableCell>
            <TableCell sx={styleCell}>Order Num.</TableCell>
            <TableCell sx={styleCell} align="center">
              Status
            </TableCell>
            <TableCell sx={styleCell}>Name</TableCell>
            <TableCell sx={styleCell}>Customer ID</TableCell>
            <TableCell sx={styleCell}>Amount</TableCell>
            <TableCell sx={styleCell}></TableCell>
            <TableCell sx={styleCell}></TableCell>
            <TableCell sx={styleCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={styleRow}>
                {row.dueDate}
              </TableCell>
              <TableCell sx={styleRow}>{row.issueDate}</TableCell>
              <TableCell sx={styleRow}>{row.orderNum}</TableCell>
              <TableCell sx={styleRow} align="center">
                {getStatusColor(row.status)}
              </TableCell>
              <TableCell sx={styleRow}>{row.customerName}</TableCell>
              <TableCell sx={styleRow}>{row.customerNum}</TableCell>
              <TableCell sx={styleRow}>{row.Amount}</TableCell>
              <TableCell sx={styleRow}>
                <NavLink to={`/Invoices/${row.id}`}>
                  <FilledBtn
                    text="View"
                    padding="3px 13px"
                    fontSize="14px"
                    fontColor="white"
                    bgColor="black"
                  />
                </NavLink>
              </TableCell>
              <TableCell sx={styleRow}>
                <LuPenLine />
              </TableCell>
              <TableCell sx={styleRow}>
                <FaRegTrashAlt />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
