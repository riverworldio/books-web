import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.js";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Invoice from "./pages/Invoice/Invoice.js";
import Customer from "./pages/Customer/Customer.js";
import Items from "./pages/Items/Items.js";
import Reports from "./pages/Reports/Reports.js";
import InvoiceMain from "./pages/Invoice/InvoiceMain.js";
import NewInvoice from "./pages/Invoice/NewInvoice.js";
import NewCustomer from "./pages/Customer/NewCustomer.js";
import InvoicesDetails from "./pages/Invoice/InvoicesDetails.js";
import ProfitAndLoss from "./pages/Reports/ProfitAndLoss.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/viewInvoices" element={<Invoice />} />
          <Route path="/newInvoice" element={<NewInvoice />} />
          <Route path="/editInvoice/:id" element={<NewInvoice />} />
          <Route path="/Sales/Invoices" element={<InvoiceMain />} />
          <Route path="/Sales/Customers" element={<Customer />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/ProfitAndLoss" element={<ProfitAndLoss />} />
          <Route path="/newCustomer" element={<NewCustomer />} />
          <Route path="/editCustomer/:id" element={<NewCustomer />} />
          <Route path="/Invoices/:id" element={<InvoicesDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
