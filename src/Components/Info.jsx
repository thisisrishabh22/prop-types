import PropTypes from "prop-types";
import React from "react";

const Info = ({ name, age, render, numOrString, enuM }) => {
  return (
    <>
      <div>{`${name} is ${age} years old`}</div>
      {render}
      <div>{`${numOrString} should be either number or string`}</div>
      <div>{`The component is ${enuM}`}</div>
    </>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  render: PropTypes.element.isRequired,
  numOrString: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  enuM: PropTypes.oneOf(["Mounted", "Unmounted"]).isRequired,
};

export default Info;
