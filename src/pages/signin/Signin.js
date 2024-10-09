import React, { useState, useEffect } from "react";
import { useActions } from "../../app/use-Actions.js";
import { signIn, signOut, clearErrorMessage } from "../../actions/AuthActions.js";
import { fetchConfig } from "../../actions/ConfigActions";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { selectAuth } from "../../selectors/AuthSelector.js";
import { useSelector } from "react-redux";
import CustomCard from "../../components/CustomCard/CustomCard.js";
import { CircularProgress, Alert, Link, Snackbar } from "@mui/material";
import {
  InputContainer,
  Label,
  StyledInput,
  ModalButton,
} from "./Login.styles.js";
import { useLocation } from "react-router-dom";
import { selectConfig } from "../../selectors/ConfigSelector";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signin.css";
import { fetchEntity } from "../../actions/EntityActions";
import { extractFromHostname } from "../../utils/StringUtils.js";

const Login = () => {
  const location = useLocation();
  const [redirectMessage, setRedirectMessage] = useState("");
  // const pathnameSegments = location.pathname.split(".");
  // const targetSegmentIndex = 1;
  // const targetSegment = pathnameSegments[targetSegmentIndex] || "";
  const { isAuthenticated, isLoading, errorMessage } = useSelector(selectAuth);
  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const actions = useActions({
    signIn,
    signOut,
    clearErrorMessage,
    fetchConfig,
    fetchEntity
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");

  const { data: configDatafetch } = useSelector(selectConfig);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    actions.clearErrorMessage();
    const hostname = window.location.hostname;
    console.log(hostname);
    const extracted = extractFromHostname(hostname);
    console.log(extracted);
    setCompanyName(extracted);
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // console.log(location);
    // if (location?.state) {
    //   setRedirectMessage(location?.state?.redirectMessage);
    // }
    // setCompanyName(configDatafetch?.tenantName);
    // setCompanyName(targetSegment);

  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
      actions.fetchConfig();
      actions.fetchEntity("weekEntry");
      actions.fetchEntity("timeEntry");
      actions.fetchEntity("member");
    }
  }, [isAuthenticated]);

  // const handleKeyPress = (event) => {
  //   var code = event.keyCode || event.which;
  //   if (code === 13) {
  //     handleSignIn();
  //   }
  // };

  const handleSignIn = () => {
    console.log("handle signin working");
    setRedirectMessage("");
    actions.clearErrorMessage();
    setErrors("");
    if (username?.length == 0 || password?.length == 0) {
      setErrors("Please fill out all fields.");
    } else if (!username?.includes("@")) {
      setErrors("Email is not valid");
    } else {
      if (password == undefined || password?.length < 6) {
        setErrors("Password should have atleast 6 characters");
      } else {
        actions.signIn(username, password);
      }
    }
    console.log("signed in successfully");
  };

  // const handleNumberChange = (e) => {
  //   e.preventDefault();
    // const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    // if (onlyNums.length <= 10) {
      // setUsername(onlyNums);
    // }
  // };
  return (
    <div className="signfullpage">
      <CustomCard companyName={companyName} title="Sign In">
        <InputContainer>
          {errorMessage && (
            <Alert
              severity="error"
              style={{
                marginTop: "12px",
                marginBottom: "-4px",
                fontSize: "13px",
              }}
            >
              {errorMessage}
            </Alert>
          )}
          {errors && (
            <Alert
              severity="error"
              style={{
                marginTop: "12px",
                marginBottom: "-4px",
                fontSize: "13px",
              }}
            >
              {errors}
            </Alert>
          )}
          {redirectMessage && redirectMessage != "" && (
            <Alert
              severity="success"
              style={{
                marginTop: "12px",
                marginBottom: "-4px",
                fontSize: "13px",
              }}
            >
              {redirectMessage}
            </Alert>
          )}
        </InputContainer>
        <div>
          <label>Email</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            className="signin-inputfield"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // inputProps={{
            //   minLength: 10,
            //   maxLength: 10,
            // }}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <div className="password-input mb-3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="signin-inputfield"
              required
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? < FaEye/> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <InputContainer>
          <ModalButton
            data-testid="modalConfirm"
            autoFocus
            onClick={() => handleSignIn()}
          >
            {isLoading ? (
              <CircularProgress
                size={16}
                style={{
                  color: "#ffffff",
                }}
              />
            ) : (
              "Sign In"
            )}
          </ModalButton>
        </InputContainer>

        <div className="d-flex justify-content-between mt-3">
          {/* <div className="d-flex">
            <h6 className="signin-subtext">New User ? &nbsp;</h6>
            <NavLink to="/signUp" className="signin-subtext1">
              Sign Up
            </NavLink>
          </div> */}
          <div className="d-flex">
            <h6 className="signin-subtext">Forgot Password? &nbsp;</h6>
            <NavLink to="/forgotPassword" className="signin-subtext1">
              Click here
            </NavLink>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default Login;
