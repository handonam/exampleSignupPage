import React from "react";
import "./index.css";
import useForm from "./useForm";
import validator from "./utilities/validator";
import normalizer from "./utilities/normalizer";

/**
 * Signup Form
 *
 * A standard, no-fuss signup form that we see in many websites across the universe.
 */
const SignupForm = () => {
  const formEl = React.useRef();
  const [status, setStatus] = React.useState(null);
  const {
    values,
    errors,
    handleReset,
    handleInputChange,
    handleInputBlur,
    handleFormSubmit,
  } = useForm(
    function successCallback() {
      const valuesToSubmit = {};
      [...formEl.current.elements].forEach((el) => {
        if (el.name) {
          valuesToSubmit[el.name] = el.value;
        }
      });

      /**
       * Mocking API responses.
       */
      setTimeout(() => {
        if (valuesToSubmit.firstName.toLowerCase() === "joe") {
          setStatus("Failed");
        } else {
          setStatus("Success!");
        }
      }, 1000);
    },
    validator,
    normalizer
  );

  return (
    <form
      onSubmit={handleFormSubmit}
      noValidate
      ref={formEl}
      className="SignupForm"
    >
      <label
        htmlFor="firstName"
        className={`SignupForm__Label ${
          errors.firstName && "SignupForm__Label--Error"
        }`}
      >
        First name
      </label>
      <div className="SignupForm__InputErrorSet">
        <input
          className="SignupForm__Input"
          type="text"
          id="firstName"
          name="firstName"
          value={values.firstName || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span className="SignupForm__ErrorMsg">{errors.firstName}</span>
      </div>
      <label
        htmlFor="lastName"
        className={`SignupForm__Label ${
          errors.lastName && "SignupForm__Label--Error"
        }`}
      >
        Last name
      </label>
      <div className="SignupForm__InputErrorSet">
        <input
          className={`SignupForm__Input ${
            errors.lastName && "SignupForm__Input--Error"
          }`}
          type="text"
          id="lastName"
          name="lastName"
          value={values.lastName || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span className="SignupForm__ErrorMsg">{errors.lastName}</span>
      </div>
      <label
        htmlFor="phoneNumber"
        className={`SignupForm__Label ${
          errors.phoneNumber && "SignupForm__Label--Error"
        }`}
      >
        Phone Number
      </label>
      <div className="SignupForm__InputErrorSet">
        <input
          className={`SignupForm__Input ${
            errors.phoneNumber && "SignupForm__Input--Error"
          }`}
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={values.phoneNumber || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span className="SignupForm__ErrorMsg">{errors.phoneNumber}</span>
      </div>
      <label
        htmlFor="email"
        className={`SignupForm__Label ${
          errors.email && "SignupForm__Label--Error"
        }`}
      >
        Email Address
      </label>
      <div className="SignupForm__InputErrorSet">
        <input
          className={`SignupForm__Input ${
            errors.email && "SignupForm__Input--Error"
          }`}
          type="email"
          id="email"
          name="email"
          value={values.email || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span className="SignupForm__ErrorMsg">{errors.email}</span>
      </div>
      <label
        htmlFor="password"
        className={`SignupForm__Label ${
          errors.password && "SignupForm__Label--Error"
        }`}
      >
        Password
      </label>
      <div className="SignupForm__InputErrorSet">
        <input
          className="SignupForm__Input"
          type="password"
          id="password"
          name="password"
          value={values.password || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span className="SignupForm__ErrorMsg">{errors.password}</span>
      </div>
      <label
        htmlFor="confirmPassword"
        className={`SignupForm__Label ${
          errors.confirmPassword && "SignupForm__Label--Error"
        }`}
      >
        Confirm Password
      </label>
      <div className="SignupForm__InputErrorSet">
        <input
          className="SignupForm__Input"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span className="SignupForm__ErrorMsg">{errors.confirmPassword}</span>
      </div>

      <div className="SignupForm__Actions">
        {status === "Success!" && (
          <div className="SignupForm__SuccessSubmitMsg">Thank you for submitting your request!</div>
        )}
        {status !== "Success!" && (
          <>
            <button
              type="submit"
              className="SignupForm__Button SignupForm__Button--Primary"
            >
              Submit
            </button>
            <button
              type="reset"
              className="SignupForm__Button"
              onClick={handleReset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </form>
  );
};

SignupForm.propTypes = {};

export default SignupForm;
