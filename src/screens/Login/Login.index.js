import React, { useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

import { LoginFieldConstants } from "./Login.constants";
import LoginFormInput from "../../components/LoginFormInput";
import ErrorAlert from "../../components/ErrorAlert";
import { setOemUserData } from "./Login.actions";
import { loginReq } from "../../services/api";
import logoDark from "../../assets/images/logoDark.png";

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  const login = async (body) => {
    setIsFormLoading(true);
    try {
      const res = await loginReq(body);
      const { data } = res.data;
      const { accessToken, user } = data;
      const payload = {
        isAuthenticated: true,
        accessToken: accessToken,
        userId: user.id,
        name: user.name,
        phoneNumber: user.phone_number,
        email: user.email,
        userName: user.username,
        companyId: user.fk_company_id,
        role: user.role,
        companyLogo: user.userCompany.logo,
        companyName: user.userCompany.name,
      };

      dispatch(setOemUserData(payload));
      history.replace("/users/dashboard");
    } catch (err) {
      setErrorMessage(err.response?.data.message);
    }
    setIsFormLoading(false);
  };

  const handleLogin = (values) => {
    const body = {
      username: values.email,
      password: values.password,
    };
    login(body);
  };

  const onHandleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(handleLogin)();
    }
  };

  return (
    <>
      <ErrorAlert message={errorMessage} setErrorMessage={setErrorMessage} />
      <Row className="m-0">
        <Col
          className="signin-col-l d-flex align-items-center"
          lg={{ span: 5 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
        >
          <div className="w-100">
            <div className="text-center">
              <Link to="/login">
                <img className="logo-img" src={logoDark} alt="" />
              </Link>
            </div>
            <div className="login-text text-center pt-5">
              <h1 className="toem-heading-1 fw-bold mb-0">Login</h1>
              <p className="toem-signin-text">to your account</p>
            </div>
            {LoginFieldConstants.map((field, i) => {
              return (
                <LoginFormInput
                  key={i}
                  keyPressed={onHandleKeyPress}
                  name={field.name}
                  type={field.type}
                  label={field.label}
                  control={control}
                  required={field.required}
                  onInput={field.onInput}
                  rules={field.rules}
                  errors={errors}
                  errorMessage={field.errorMessage}
                />
              );
            })}

            <div className="d-flex justify-content-end align-items-center">
              <Link to="/forgotPassword" className="toem-login-link-hover">
                Forgot password?
              </Link>
            </div>
            <div className="mt-4 mb-3 d-grid gap-2">
              <button
                className="toem-signin-button"
                onClick={handleSubmit(handleLogin)}
                type="submit"
                disabled={isFormLoading}
              >
                {isFormLoading && (
                  <Spinner animation="border" size="sm" className="me-2" />
                )}{" "}
                Login
              </button>
            </div>
          </div>
        </Col>
        <Col
          className="signin-col-r"
          lg={{ span: 7 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
        >
          <div className="signin-overlay"></div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
