import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => (
  <button type="button" className="buttons">
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
