import React, { useEffect, useState } from "react";
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
import { useActions } from "../../app/use-Actions";
import { deleteEntity, fetchEntity } from "../../actions/EntityActions";
import { useSelector } from "react-redux";
import { selectEntity } from "../../selectors/EntitySelector";
import ConfirmationDialog from "../../components/DeletingConfirmation";
import Pagination from "../Pagination/Pagination";
import Container from "../Container/Container";

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
  const { customer } = useSelector(selectEntity);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const size = 10;
  const totalPages = Math.ceil((customer?.data?.total || 0) / size);
  const [currentPage, setCurrentPage] = useState(1);

  const actions = useActions({
    fetchEntity,
    deleteEntity,
  });

  useEffect(() => {
    const offset = (currentPage - 1) * size;
    actions.fetchEntity("customer", `offset=${offset}&size=${size}`);
  }, [currentPage]);

  const handleDeleteEntities = () => {
    if (selectedId) {
      actions.deleteEntity(selectedId, "customer");
      setOpen(false);
    }
  };

  const handleTrashClose = () => setOpen(false);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const handleOpenDeleteDialog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={styleCell}>Name</TableCell>
              <TableCell sx={styleCell}>Company Name</TableCell>
              <TableCell sx={styleCell}>Email</TableCell>
              <TableCell sx={styleCell}>Work Phone</TableCell>
              <TableCell sx={styleCell}>Customer Type</TableCell>
              <TableCell sx={styleCell}></TableCell>
              <TableCell sx={styleCell}></TableCell>
              <TableCell sx={styleCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer?.data?.data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={styleRow}>
                  {row.primaryContact.firstName + " " + row.primaryContact.lastName || "" }
                </TableCell>
                <TableCell sx={styleRow}>{row.primaryContact.companyName}</TableCell>
                <TableCell sx={styleRow}>{row.primaryContact.email}</TableCell>
                <TableCell sx={styleRow}>{row.primaryContact.phone}</TableCell>
                <TableCell sx={styleRow}>{row.customerType}</TableCell>
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
                  <NavLink to={`/editCustomer/${row.id}`}>
                    <LuPenLine />
                  </NavLink>
                </TableCell>
                <TableCell sx={styleRow}>
                  <FaRegTrashAlt
                    onClick={() => handleOpenDeleteDialog(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmationDialog
        isDelete={true}
        open={open}
        handleClose={handleTrashClose}
        handleAgree={handleDeleteEntities}
        message="This cannot be undone and the item gets deleted permanently."
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onPageChange={handlePageChange}
        totalEntries={customer?.data?.total}
        entriesPerPage={size}
      />
    </Container>
  );
}
