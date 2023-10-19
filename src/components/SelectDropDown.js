import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import Select from "react-select";

const SelectDropDown = ({
  name,
  placeHolder,
  rules,
  menuPlacement,
  control,
  errors,
  onChange,
  options,
  isMulti,
  disabled,
  label,
  errorMessage,
  defaultValue,
  required,
}) => {
  const customStyles = {
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <>
          <Select
            {...field}
            required={required}
            options={options}
            isDisabled={disabled ? disabled : undefined}
            isMulti={isMulti && isMulti}
            placeholder={placeHolder}
            aria-label={label}
            menuPlacement={menuPlacement && menuPlacement}
            className={`toem-select-react ${errors[name] && "border-danger"}`}
            classNamePrefix="toem-select"
            onChange={onChange && onChange}
            defaultValue={defaultValue}
            styles={customStyles}
          />
          <p className="validation-error-alert text-start">
            {errors[name] && (
              <Form.Text className="text-danger">{errorMessage}</Form.Text>
            )}
          </p>
        </>
      )}
    />
  );
};

export default SelectDropDown;
