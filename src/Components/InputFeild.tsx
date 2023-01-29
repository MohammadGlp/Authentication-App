import React from "react";
import { useField, FieldInputProps, FieldHookConfig } from "formik";

type inputProps = JSX.IntrinsicElements["input"] &
  FieldHookConfig<string> & {
    label: string;
    classInput: string;
    classLabel: string;
    id: string;
    // classError: string;
    classForm: string;
    type: string;
  };

const InputFeild = ({
  label,
  classInput,
  classLabel,
  id,
  // classError,
  classForm,
  type,
  ...props
}: inputProps): JSX.Element => {
  const [field, meta] = useField(props);
  return (
    <div className={classForm}>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <input className={classInput} type={type} id={id} {...props} {...field} />
      {/* {meta.touched && meta.error ? (
        <div className={classError}>{meta.error}</div>
      ) : null} */}
    </div>
  );
};

export default InputFeild;
