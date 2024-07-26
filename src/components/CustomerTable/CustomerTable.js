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

function createData(id, name, companyName, email, workPh, receivables) {
  return {
    id,
    name,
    companyName,
    email,
    workPh,
    receivables,
  };
}

const rows = [
  createData(
    1,
    "Sanjay",
    "Oliva Garments",
    "neethu@gmail.com",
    9084678678,
    "Rs.6570"
  ),
  createData(
    2,
    "Neethu",
    "Oliva Garments",
    "neethu@gmail.com",
    9084671234,
    "Rs.2570"
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

export default function CustomerTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={styleCell}>Name</TableCell>
            <TableCell sx={styleCell}>Company Name</TableCell>
            <TableCell sx={styleCell}>Email</TableCell>
            <TableCell sx={styleCell}>Work Phone</TableCell>
            <TableCell sx={styleCell}>Receivables (BCY)</TableCell>
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
                {row.name}
              </TableCell>
              <TableCell sx={styleRow}>{row.companyName}</TableCell>
              <TableCell sx={styleRow}>{row.email}</TableCell>
              <TableCell sx={styleRow}>{row.workPh}</TableCell>
              <TableCell sx={styleRow}>{row.receivables}</TableCell>
              <TableCell sx={styleRow}>
                <FilledBtn
                  text="View"
                  padding="3px 13px"
                  fontSize="14px"
                  fontColor="white"
                  bgColor="black"
                />
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
