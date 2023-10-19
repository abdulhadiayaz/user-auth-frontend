import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const ImageInput = ({
  name,
  rules,
  control,
  label,
  placeHolder,
  required,
  type,
  isDisabled,
  onChange,
  errors,
  errorMessage,
  defaultValue,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue && defaultValue}
        render={({ field }) => (
          <>
            <Form.Label className={`mb-0 ${required && "required"}`}>
              {" "}
              {label}{" "}
            </Form.Label>
            <Form.Control
              {...field}
              className={`shadow-none ${errors[name] && "border-danger"}`}
              disabled={isDisabled && isDisabled}
              onChange={onChange && onChange}
              placeholder={placeHolder}
              type={type}
            />
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

export default ImageInput;
