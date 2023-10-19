import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const CustomInput = ({
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
  defaultValue,
  onChange,
  maxLength,
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
            <div>
              <Form.Control
                {...field}
                className={`shadow-none ${errors[name] && "border-danger"}`}
                disabled={isDisabled && isDisabled}
                onInput={onInput && onInput}
                onChange={onChange && onChange}
                placeholder={placeHolder}
                type={type}
                maxLength={maxLength && maxLength}
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

export default CustomInput;
