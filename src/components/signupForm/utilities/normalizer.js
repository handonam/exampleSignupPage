/**
 * Input normalizer
 *
 * We want to normalize input here as they type.
 */
const normalizer = (values = {}) => {
  /**
   * Phone Numbers
   */
  if (values.phoneNumber) {
    // We only want numbers!
    const currentValue = values.phoneNumber.replace(/[^\d]/g, "");

    switch (true) {
      case currentValue.length < 4:
        break;
      // Set up the area codes!
      case currentValue.length < 7:
        values.phoneNumber = `(${currentValue.slice(
          0,
          3
        )}) ${currentValue.slice(3)}`;
        break;
      // Give us the dashes!
      case currentValue.length >= 7:
        values.phoneNumber = `(${currentValue.slice(
          0,
          3
        )}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        break;
      default:
        break;
    }
  }

  /**
   * Trim Everything!
   */
  for (const key in values) {
    if (values[key]) {
      values[key] = values[key].trim();
    }
  }

  return values;
};

export default normalizer;
