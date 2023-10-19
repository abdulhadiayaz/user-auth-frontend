import React, { useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

import LoginFormInput from "../../components/LoginFormInput";
import ErrorAlert from "../../components/ErrorAlert";
import { forgotPasswordrReq } from "../../services/api";
import logoDark from "../../assets/images/logoDark.png";
import CustomButton from "../../components/CustomButton";

const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const history = useHistory();

  const forgotPassword = async (body) => {
    setIsFormLoading(true);
    try {
      await forgotPasswordrReq(body.email);
      history.replace({
        pathname: `/newPassword`,
        state: { username: body.email },
      });
    } catch (err) {
      setErrorMessage(err.response?.data.message);
    }
    setIsFormLoading(false);
  };

  const onHandleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(forgotPassword)();
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

            <LoginFormInput
              keyPressed={onHandleKeyPress}
              name="email"
              type="email"
              label="Email"
              control={control}
              required={true}
              onInput={(e) => e.target.value.toString().trim()}
              rules={{
                required: true,
              }}
              errors={errors}
              errorMessage="Please enter a valid email"
            />

            <Row className="mt-4 mb-3">
              <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 12 }}>
                <CustomButton
                  className="toem-signin-button back-button  float-none"
                  onClick={() => history.goBack()}
                >
                  Back to Login
                </CustomButton>
              </Col>

              <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 12 }}>
                <CustomButton
                  className="toem-signin-button send-code-button float-none"
                  onClick={handleSubmit(forgotPassword)}
                  type="submit"
                  disabled={isFormLoading}
                >
                  {isFormLoading && (
                    <Spinner animation="border" size="sm" className="me-2" />
                  )}{" "}
                  Send Code
                </CustomButton>
              </Col>
            </Row>
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

export default ForgotPassword;
