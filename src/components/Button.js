import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => (
  <button type="button" className="buttons">
    {value}
  </button>
);

Button.propTypes = {
  result: PropTypes.string,
};

export default Button;
