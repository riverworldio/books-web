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
// import InvoiceMain from "./pages/Invoice/InvoiceMain.js";
import NewInvoice from "./pages/Invoice/NewInvoice.js";
import NewCustomer from "./pages/Customer/NewCustomer.js";
import InvoicesDetails from "./pages/Invoice/InvoicesDetails.js";
import ProfitAndLoss from "./pages/Reports/ProfitAndLoss.js";
import BillsList from "./pages/Bills/BillsList.js";
import NewBills from "./pages/Bills/NewBills.js";
import BillsDetails from "./pages/Bills/BillsDetails.js";
import NewItem from "./pages/Items/NewItem.js";
import PrivateRoutes from "./components/privateRoute/PrivateRoute.js";
import Login from "./pages/signin/Signin.js";
import SignUp from "./pages/signup/Signup.js";
import RequestOtp from "./pages/sendOtp/index.js";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<RequestOtp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/viewInvoices" element={<Invoice />} />
            <Route path="/newInvoice" element={<NewInvoice />} />
            <Route path="/editInvoice/:id" element={<NewInvoice />} />
            <Route path="/Sales/Invoices" element={<Invoice />} />
            <Route path="/Sales/Customers" element={<Customer />} />
            <Route path="/Items" element={<Items />} />
            <Route path="/newItem" element={<NewItem />} />
            <Route path="/editItem/:id" element={<NewItem />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/ProfitAndLoss" element={<ProfitAndLoss />} />
            <Route path="/newCustomer" element={<NewCustomer />} />
            <Route path="/editCustomer/:id" element={<NewCustomer />} />
            <Route path="/Invoices/:id" element={<InvoicesDetails />} />
            <Route path="/purchases/bills" element={<BillsList />} />
            <Route path="/newBill" element={<NewBills />} />
            <Route path="/editBill/:id" element={<NewBills />} />
            <Route path="/bills/:id" element={<BillsDetails />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
