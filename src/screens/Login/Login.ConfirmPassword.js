import React, { useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, Link, useLocation } from "react-router-dom";

import { ConfirmPasswordInputFields } from "./Login.constants";
import LoginFormInput from "../../components/LoginFormInput";
import ErrorAlert from "../../components/ErrorAlert";
import { confirmPasswordrReq } from "../../services/api";
import logoDark from "../../assets/images/logoDark.png";

const ConfirmPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const history = useHistory();

  const confirmPassword = async (body) => {
    setIsFormLoading(true);
    try {
      await confirmPasswordrReq(body);
      history.replace("/login");
    } catch (err) {
      setErrorMessage(err.response?.data.message);
    }
    setIsFormLoading(false);
  };

  const handleLogin = (values) => {
    const body = {
      username: location.state.username,
      code: values.code,
      password: values.newPassword,
    };
    confirmPassword(body);
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
              <p className="toem-signin-text">Recover Your Account</p>
            </div>
            {ConfirmPasswordInputFields.map((field, i) => {
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
                Reset Password
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

export default ConfirmPassword;
