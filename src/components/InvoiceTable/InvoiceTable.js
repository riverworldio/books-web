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
  const { invoice } = useSelector(selectEntity);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const size = 10;
  const totalPages = Math.ceil((invoice?.data?.total || 0) / size);
  const [currentPage, setCurrentPage] = useState(1);

  const actions = useActions({
    fetchEntity,
    deleteEntity,
  });

  useEffect(() => {
    const offset = (currentPage - 1) * size;
    actions.fetchEntity("invoice", `offset=${offset}&size=${size}`);
  }, [currentPage]);

  const handleDeleteEntities = () => {
    if (selectedId) {
      actions.deleteEntity(selectedId, "invoice");
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
              <TableCell sx={styleCell}>Invoice Date</TableCell>
              <TableCell sx={styleCell}>Order Num.</TableCell>
              <TableCell sx={styleCell}>Name</TableCell>
              <TableCell sx={styleCell}>Customer ID</TableCell>
              <TableCell sx={styleCell}>Amount</TableCell>
              <TableCell sx={styleCell} align="center">
                Status
              </TableCell>
              <TableCell sx={styleCell}></TableCell>
              <TableCell sx={styleCell}></TableCell>
              <TableCell sx={styleCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoice?.data?.data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={styleRow}>
                  {row.dueDate}
                </TableCell>
                <TableCell sx={styleRow}>{row.invoiceDate}</TableCell>
                <TableCell sx={styleRow}>{row.orderNumber}</TableCell>
                <TableCell sx={styleRow}>{row.customerName}</TableCell>
                <TableCell sx={styleRow}>{row.invoiceNumber || 0}</TableCell>
                <TableCell sx={styleRow}>{row.total || "$0.00"}</TableCell>
                <TableCell sx={styleRow} align="center">
                  {getStatusColor(row.status || "unknown")}
                </TableCell>
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
                  <NavLink to={`/editInvoice/${row.id}`}>
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
        totalEntries={invoice?.data?.total}
        entriesPerPage={size}
      />
    </Container>
  );
}
