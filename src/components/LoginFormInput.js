import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const LoginFormInput = ({
  name,
  rules,
  control,
  label,
  placeHolder,
  required,
  type,
  isDisabled,
  errors,
  errorMessage,
  onInput,
  min,
  defaultValue,
  keyPressed,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <>
            <Form.Label className={`mb-0 ${required && "required"}`}>
              {" "}
              {label}{" "}
            </Form.Label>
            <div>
              <Form.Control
                {...field}
                className={`shadow-none ${errors[name] && "border-danger"}`}
                disabled={isDisabled && isDisabled}
                onInput={onInput && onInput}
                onKeyPress={keyPressed && keyPressed}
                placeholder={placeHolder}
                type={type}
                min={min && min}
              />
            </div>
            <p className="validation-error-alert text-start">
              {errors[name] && (
                <Form.Text className="text-danger">{errorMessage}</Form.Text>
              )}
            </p>
          </>
        )}
      />
    </>
  );
};

export default LoginFormInput;
