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
import ConfirmationDialog from "../DeletingConfirmation";
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

export default function BillsTable() {
  const { bill } = useSelector(selectEntity);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const size = 10;
  const totalPages = Math.ceil((bill?.data?.total || 0) / size);
  const [currentPage, setCurrentPage] = useState(1);

  const actions = useActions({
    fetchEntity,
    deleteEntity,
  });

  useEffect(() => {
    const offset = (currentPage - 1) * size;
    actions.fetchEntity("bill", `offset=${offset}&size=${size}`);
  }, [currentPage]);

  const handleDeleteEntities = () => {
    if (selectedId) {
      actions.deleteEntity(selectedId, "bill");
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
              <TableCell sx={styleCell}>Due Date</TableCell>
              <TableCell sx={styleCell}>Bill Date</TableCell>
              <TableCell sx={styleCell}>Order Num.</TableCell>
              <TableCell sx={styleCell}>Vendor Name</TableCell>
              <TableCell sx={styleCell}>Bill#</TableCell>
              <TableCell sx={styleCell}>Amount</TableCell>
              <TableCell sx={styleCell}></TableCell>
              <TableCell sx={styleCell}></TableCell>
              <TableCell sx={styleCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bill?.data?.data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={styleRow}>
                  {row.dueDate}
                </TableCell>
                <TableCell sx={styleRow}>{row.billDate}</TableCell>
                <TableCell sx={styleRow}>{row.orderNumber}</TableCell>
                <TableCell sx={styleRow}>{row.vendorName}</TableCell>
                <TableCell sx={styleRow}>{row.billNumber || 0}</TableCell>
                <TableCell sx={styleRow}>{row.total || "$0.00"}</TableCell>
                <TableCell sx={styleRow}>
                  <NavLink to={`/bills/${row.id}`}>
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
                  <NavLink to={`/editbill/${row.id}`}>
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
        totalEntries={bill?.data?.total}
        entriesPerPage={size}
      />
    </Container>
  );
}
