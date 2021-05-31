import React from "react";

/**
 * useForm Hook.
 *
 * This hook manages the input and error states of each input.
 *
 * Once done, when the form is ready to submit, then check against everything and get it sent!
 */
const useForm = (success, validate, normalize) => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isDirty, setIsDirty] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  /**
   * Side effect to check for errors. If it's in submitting mode, time to fire that callback!
   */
  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      success();
    }
  }, [errors, isSubmitting, success]);

  /**
   * The self-destruct button. (Just kidding.)
   */
  function handleReset(event) {
    event.preventDefault();
    setValues({});
    setErrors({});
    setIsDirty({});
  }

  /**
   * We only want to validate when the user commits to their value AFTER clicking away.
   * To do so, we need to check if this input is dirty.
   */
  function handleInputBlur(event) {
    setIsDirty({ ...isDirty, [event.target.name]: true });

    const validations = validate(values); // we use `newValues` here because the `values` state isn't updated yet.
    setErrors({
      ...errors,
      [event.target.name]: validations[event.target.name] || "",
    });
  }

  /**
   * Handle on input change the react state of input, as well as normalizing and validating as you type.
   * 
   * But, only validate if the input is "dirty" via handleInputBlur()
   */
  function handleInputChange(event) {
    const newValues = {
      ...values,
      [event.target.name]: event.target.value,
    };

    /**
     * Normalizing
     */
    normalize(newValues);

    /**
     * Now set it.
     */
    setValues(newValues);

    /**
     * Validate as we type for this particular input only
     */
    if (isDirty[event.target.name]) {
      const validations = validate(newValues); // we use `newValues` here because the `values` state isn't updated yet.
      setErrors({
        ...errors,
        [event.target.name]: validations[event.target.name] || "",
      });
    }
  }

  /**
   * Ship it!
   *
   * Let's check the work:
   * - validate() inputs for any issues
   * - setErrors() if we find any issues
   * - setIsSubmitting() during this process.
   */
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the page from submitting, refreshing with new url params.
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  return {
    values,
    errors,
    isDirty,
    isSubmitting,
    handleReset,
    handleInputChange,
    handleInputBlur,
    handleFormSubmit,
  };
};

export default useForm;
