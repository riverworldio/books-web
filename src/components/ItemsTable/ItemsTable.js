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

export default function ItemsTable() {
  const { items } = useSelector(selectEntity);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const size = 10;
  const totalPages = Math.ceil((items?.data?.total || 0) / size);
  const [currentPage, setCurrentPage] = useState(1);

  const actions = useActions({
    fetchEntity,
    deleteEntity,
  });

  useEffect(() => {
    const offset = (currentPage - 1) * size;
    actions.fetchEntity("items", `offset=${offset}&size=${size}`);
  }, [currentPage]);

  const handleDeleteEntities = () => {
    if (selectedId) {
      actions.deleteEntity(selectedId, "items");
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
              <TableCell sx={styleCell}>Purchase Description</TableCell>
              <TableCell sx={styleCell}>Purchase Rate</TableCell>
              <TableCell sx={styleCell}>Description</TableCell>
              <TableCell sx={styleCell}>Rate</TableCell>
              <TableCell sx={styleCell}>Usage Unit</TableCell>
              {/* <TableCell sx={styleCell}></TableCell> */}
              <TableCell sx={styleCell}></TableCell>
              <TableCell sx={styleCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.data?.data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={styleRow}>
                  {row.itemName}
                </TableCell>
                <TableCell sx={styleRow}>{row.purchaseInformation.description || "Not Available"}</TableCell>
                <TableCell sx={styleRow}>{row.purchaseInformation.costPrice || 0}</TableCell>
                <TableCell sx={styleRow}>{row.salesInformation.description || 'Not Available'}</TableCell>
                <TableCell sx={styleRow}>{row.salesInformation.sellingPrice || 0}</TableCell>
                <TableCell sx={styleRow}>{row.itemUnit}</TableCell>
                {/* <TableCell sx={styleRow}>
                  <NavLink to={`/item/${row.id}`}>
                    <FilledBtn
                      text="View"
                      padding="3px 13px"
                      fontSize="14px"
                      fontColor="white"
                      bgColor="black"
                    />
                  </NavLink>
                </TableCell> */}
                <TableCell sx={styleRow}>
                  <NavLink to={`/editItem/${row.id}`}>
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
        totalEntries={items?.data?.total}
        entriesPerPage={size}
      />
    </Container>
  );
}
