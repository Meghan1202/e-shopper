import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  primary,
  onClick,
  className,
  type,
}) => (
  <button
    className={cn(className, { [styles.primary]: primary, [styles.secondary]: !primary })}
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    data-testid="Submit-button"
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  className: '',
  primary: false,
  type: 'button',
};

export default Button;
