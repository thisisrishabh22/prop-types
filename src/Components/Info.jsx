import PropTypes from "prop-types";
import React from "react";

const Info = ({ name, age, render }) => {
  return (
    <>
      <div>{`${name} is ${age} years old`}</div>
      {render}
    </>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  render: PropTypes.element.isRequired,
};

export default Info;
